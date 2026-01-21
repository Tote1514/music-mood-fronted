export async function getRecommendations(moodText, genres){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/recommendations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ moodText, genres }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
    }

    const data = await response.json();
    return data.recommendations;
}


export async function createPlaylist(name, tracks){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/create-playlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, tracks }),
    });

    if (!response.ok) {
        throw new Error("Failed to create playlist");
    }

    const data = await response.json();
    return data.playlistUrl;
}