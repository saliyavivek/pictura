const samplePosts = [
    {
        title: "Soothing Serenity",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Discover tranquility in the midst of nature's embrace, where the gentle rustle of leaves orchestrates a symphony of peace, inviting you to unwind.",
    },
    {   
        title: "Ephemeral Whispers",
        image: {
            filename: "postimage",
            url: "https://plus.unsplash.com/premium_photo-1700170363213-add0962221c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
        },
        description: "Capturing fleeting moments in a dance of ephemeral whispers, these fragments of time speak volumes, weaving tales of fleeting beauty.",
    },
    {
        title: "Enigmatic Shadows",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1700514351733-992fc7b66306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
        },
        description: "Obscured in enigmatic shadows, secrets linger, hinting at untold stories waiting to be unveiled beneath the veil of dusk.",
    },
    {
        title: "Luminescent Dreams",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1700493624674-ba1d0ec73595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        },
        description: "Within the hues of luminescent dreams, fantasies unfold like shimmering waves, painting a surreal canvas of endless possibilities.",
    },
    {
        title: "Whispering Meadows",
        image: {
            filename: "postimage",
            url: "https://plus.unsplash.com/premium_photo-1686855057846-1fd77f3eefc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Amidst whispering meadows, where wildflowers sway in harmony with the breeze, find solace in nature's gentle embrace.",
    },
    {
        title: "Melodic Twilight",
        image: {
            filename: "postimage",
            url: "https://plus.unsplash.com/premium_photo-1686855057846-1fd77f3eefc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
        },
        description: "As the day bids adieu, the melodic twilight serenades the night, casting a serene aura that enchants the soul.",
    },
    {
        title: "Mystic Echoes",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1682685797769-481b48222adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Echoes of mystic tales resonate through time, weaving an intricate tapestry of legends whispered by ancient winds.",
    },
    {
        title: "Serendipitous Wanderlust",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1700393289656-9e0a4ff76a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Embrace the serendipity of wanderlust, where each step unravels unforeseen adventures in a symphony of exploration.",
    },
    {
        title: "Aurora's Embrace",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1698859858637-9aa64302f629?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Enveloped in Aurora's embrace, celestial dances paint the sky, casting a spell of wonder upon the awakened night.",
    },
    {
        title: "Rustic Elegance",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1700322153270-1221b6abe6cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Discover the charm of rustic elegance, where simplicity intertwines with grace, creating timeless beauty.",
    },
    {
        title: "Ethereal Reverie",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1673267573163-5eec27e65be0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "In an ethereal reverie, fleeting thoughts take flight, dancing on the edges of imagination's endless horizon.",
    },
    {
        title: "Celestial Harmony",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1682685797886-79020b7462a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
        },
        description: "Find solace in celestial harmony, where cosmic melodies orchestrate a symphony of balance in the universe's embrace.",
    },
    {
        title: "Mystic Falls",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge",
    },
    {
        title: "Safari Lodge",
        image: {
            filename: "postimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    },
    {
        title: "Art Deco",
        image: {
            filename: "postimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",       
        },
        description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    },
];

module.exports = {data: samplePosts};