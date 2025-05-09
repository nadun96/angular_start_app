import {Photos} from './Photos';

export class PhotosDto implements Photos{

    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {
        this.albumId = albumId;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }
}
