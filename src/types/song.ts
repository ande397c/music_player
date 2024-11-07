export interface Song {
 id: number;
 trackTitle: string;
 trackSrc: string;
 trackLength?: string;
 artist: string;
 imgSrc: string;
 isSongPlaying?: boolean;
}

export interface CurrentTrack {
 id: number;
 trackTitle: string;
 trackSrc: string;
 artist: string;
 imgSrc: string;
}
