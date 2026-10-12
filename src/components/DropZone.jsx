import React, { useRef } from 'react';

export default function DropZone({ followers, following, onFilesSelect }) {
  const fileFollowersRef = useRef(null);
  const fileFollowingRef = useRef(null);

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, type) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      onFilesSelect(Array.from(e.dataTransfer.files), type);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Box Upload Followers */}
      <div
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'followers')}
        onClick={() => fileFollowersRef.current?.click()}
        className={`border border-dashed rounded-xl p-5 text-center transition-all cursor-pointer relative group flex flex-col items-center justify-center min-h-[140px] ${
          followers 
            ? 'border-emerald-500/50 bg-emerald-950/10 hover:bg-emerald-950/15' 
            : 'border-slate-800 hover:border-rose-500 bg-slate-900/40 hover:bg-slate-900/60'
        }`}
      >
        <input
          type="file"
          ref={fileFollowersRef}
          onChange={(e) => onFilesSelect(Array.from(e.target.files), 'followers')}
          accept=".json"
          className="hidden"
        />
        
        {followers ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              ✓
            </div>
            <p className="text-xs font-semibold text-emerald-400">File Followers Loaded</p>
            <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{followers.filename}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-slate-500 group-hover:text-rose-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-xs font-semibold text-slate-300">Unggah File Followers</p>
            <p className="text-[10px] text-slate-500">Seret file json di sini atau klik</p>
          </div>
        )}
      </div>

      {/* Box Upload Following */}
      <div
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'following')}
        onClick={() => fileFollowingRef.current?.click()}
        className={`border border-dashed rounded-xl p-5 text-center transition-all cursor-pointer relative group flex flex-col items-center justify-center min-h-[140px] ${
          following 
            ? 'border-emerald-500/50 bg-emerald-950/10 hover:bg-emerald-950/15' 
            : 'border-slate-800 hover:border-rose-500 bg-slate-900/40 hover:bg-slate-900/60'
        }`}
      >
        <input
          type="file"
          ref={fileFollowingRef}
          onChange={(e) => onFilesSelect(Array.from(e.target.files), 'following')}
          accept=".json"
          className="hidden"
        />
        
        {following ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              ✓
            </div>
            <p className="text-xs font-semibold text-emerald-400">File Following Loaded</p>
            <p className="text-[11px] text-slate-400 truncate max-w-[200px]">{following.filename}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-slate-500 group-hover:text-rose-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-xs font-semibold text-slate-300">Unggah File Following</p>
            <p className="text-[10px] text-slate-500">Seret file json di sini atau klik</p>
          </div>
        )}
      </div>
    </div>
  );
}