export interface Track {
 trackId: number;
 trackTitle: string;
 trackSrc: string;
 trackLength?: string;
 trackArtist: string;
 imgSrc: string;
 isSongPlaying?: boolean;
}

export interface CurrentTrack {
 id: number;
 trackTitle: string;
 trackSrc: string;
 trackArtist: string;
 imgSrc: string;
}
 