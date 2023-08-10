const fetch = require("node-fetch");

const fetchData = async () => {
    const response = await fetch('https://api.igdb.com/v4/games',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': 'vz9oa173qzxzhsfwn9ht4m6k99i22g',
          'Authorization': 'Bearer hmr4e7jqv27gnz2tnrkh0agxafs1sn',
        },
        body: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    });
    
const data = await response.json();

return data;
}
module.exports = fetchData;