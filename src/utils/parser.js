export const extractUsernames = (json) => {
  const set = new Set();
  const items = Array.isArray(json)
    ? json
    : json.relationships_followers || json.relationships_following || [];

  items.forEach((item) => {
    const stringList = item.string_list_data || [];
    stringList.forEach((entry) => {
      if (entry.value) set.add(entry.value);
    });
    if (item.value) set.add(item.value);
  });

  return Array.from(set);
};

export const classifyJSON = (json, filename) => {
  const users = extractUsernames(json);
  const jsonString = JSON.stringify(json);
  
  // Menentukan tipe file berdasarkan struktur data atau nama file
  const isFollowing =
    jsonString.includes('relationships_following') ||
    filename.toLowerCase().includes('following');

  return {
    type: isFollowing ? 'following' : 'followers',
    users,
    count: users.length,
  };
};