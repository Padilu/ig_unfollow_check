import React, { useState } from 'react';
import Header from './components/Header';
import DropZone from './components/DropZone';
import StatsOverview from './components/StatsOverview';
import UserList from './components/UserList';
import { classifyJSON } from './utils/parser';

export default function App() {
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const handleFilesSelect = (files, specificType) => {
    files.forEach((file) => {
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const json = JSON.parse(e.target.result);
            const parsed = classifyJSON(json, file.name);

            // Prioritaskan penentuan tipe lewat area drop khusus jika ada
            const finalType = specificType || parsed.type;

            if (finalType === 'following') {
              setFollowing({ filename: file.name, ...parsed });
            } else {
              setFollowers({ filename: file.name, ...parsed });
            }
          } catch (err) {
            alert(`File ${file.name} bukan format JSON yang valid.`);
          }
        };
        reader.readAsText(file);
      }
    });
  };

  const followersSet = new Set(followers?.users || []);
  const notFollowingBack = (following?.users || [])
    .filter((user) => !followersSet.has(user))
    .sort();

  return (
    <div className="bg-[#0b0f19] text-slate-200 min-h-screen flex flex-col font-sans select-none antialiased">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6 flex-1 w-full flex flex-col gap-5">
        
        {/* Drop zones */}
        <DropZone 
          followers={followers} 
          following={following} 
          onFilesSelect={handleFilesSelect} 
        />

        {/* Hanya tampil jika kedua data siap */}
        {followers && following ? (
          <>
            <StatsOverview
              totalFollowers={followers.count}
              totalFollowing={following.count}
              totalNotFollowing={notFollowingBack.length}
            />
            <UserList users={notFollowingBack} />
          </>
        ) : (
          <div className="border border-slate-900 bg-slate-950/20 rounded-xl p-8 text-center flex flex-col items-center justify-center py-10 mt-2">
            <p className="text-xs text-slate-500 font-medium">Unduh data Anda di Instagram (JSON), lalu upload kedua file di atas untuk memulai analisis data.</p>
          </div>
        )}
      </main>
    </div>
  );
}