import React, { useState } from 'react';

export default function UserList({ users }) {
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );

  const handleExport = () => {
    const text = users.map((u) => `@${u}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tidak_follow_back.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 space-y-4">
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari username..."
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-rose-500/70 focus:ring-1 focus:ring-rose-500/40 transition-all w-full"
          />
        </div>
        <button
          onClick={handleExport}
          className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700/50 transition-all inline-flex items-center justify-center gap-1.5 shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Ekspor TXT
        </button>
      </div>

      {/* Grid Akun */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
        {filteredUsers.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-xs text-slate-500 font-medium">Akun tidak ditemukan atau semua orang sudah follow back</p>
          </div>
        ) : (
          filteredUsers.map((username) => (
            <div
              key={username}
              className="bg-slate-950/60 border border-slate-800/50 hover:border-slate-800 rounded-lg p-2.5 flex items-center justify-between gap-2 group transition-colors"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-7 h-7 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 text-[10px] font-bold shrink-0">
                  {username.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-medium text-slate-300 truncate">@{username}</span>
              </div>
              <a
                href={`https://instagram.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-rose-400 font-semibold text-[10px] tracking-wide uppercase px-2 py-1 rounded bg-slate-900/60 hover:bg-rose-500/5 border border-slate-800/40 hover:border-rose-500/20 transition-all shrink-0 inline-flex items-center gap-1"
              >
                Unfollow
                <span>↗</span>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}