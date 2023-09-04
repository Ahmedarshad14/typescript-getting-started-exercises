interface Album {
    artist : string;
    title : string;
    track?: number
}

function make_album (artist:string, title:string, track?:number): Album {
    const album: Album = {
        artist : artist,
        title : title
    }
    if (track !== undefined) {
        album.track = track
    }
    return album

}

// Create three albums using the make_album function
const album1: Album = make_album('Linkin Park', 'Hybrid Theory', 3);
const album2: Album = make_album('Avril Lavigne', 'Let Go', 9);
const album3: Album = make_album('Enrique Iglesias', 'Hero');

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);

// Create another album with the number of tracks
const album4: Album = make_album('Westlife', 'Angel Wings', 8);
console.log(album4);
