export async function getRecommendations(moods){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/recommendations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ moods }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
    }

    const data = await response.json();
    return data.tracks;
}

export async function getUserProfile() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }


    const data = await response.json();
    return data.display_name;
}


export async function getAccessToken() {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/token`, {
        method: "POST",
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Failed to fetch access token");
    }

    // Não tenta pegar token — ele está no cookie
    return true;
}


export async function createPlaylist(name, description, track_uris){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/playlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, description, track_uris }),
    });

    if (!response.ok) {
        throw new Error("Failed to create playlist");
    }

    const data = await response.json();
    return data.url;
}

export async function getMoodsFromText(text){
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/analysis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error("Failed to analyze text");
    }

    const data = await response.json();
    console.log("Moods analisados:", data);
    return data;
}