import React from 'react';

export default function StatsOverview({ totalFollowers, totalFollowing, totalNotFollowing }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-center">
        <p className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">Followers</p>
        <p className="text-xl font-bold text-slate-100 mt-0.5">{totalFollowers}</p>
      </div>
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex flex-col justify-center">
        <p className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">Following</p>
        <p className="text-xl font-bold text-slate-100 mt-0.5">{totalFollowing}</p>
      </div>
      <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 flex flex-col justify-center shadow-lg shadow-rose-950/10">
        <p className="text-[10px] font-medium text-rose-400 tracking-wider uppercase">Tidak Followback</p>
        <p className="text-xl font-bold text-rose-500 mt-0.5">{totalNotFollowing}</p>
      </div>
    </div>
  );
}