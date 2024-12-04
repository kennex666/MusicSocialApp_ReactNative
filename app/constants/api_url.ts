export const API_DOMAIN = {
    //  Chưa implement nên để tạm
    'platform': 'https://mockupapi',
    'musicService': 'http://192.168.31.229',
}

export const API_PATH = {
    /* Authentication: Login
        * POST /login
        * Request: { email, password }
        * Response: { errorCode: 200 | 500 , message: , data: { user.name, user.email } }
    */
    'login': '/login',
    /* Authentication: Register
        * POST /register
        * Request: { name, email, password }
        * Response: { errorCode: 200 | 500 , message: , data: { user.name, user.email } }
    * */
    'register': '/register',

    /* Playlist: Get all playlist
        * GET /playlists
        * Request: {}
        * Response: { errorCode: 200 | 500 , message: , data: { playlist.id, playlist.name, playlist.songs[] } }
    */
    'playlist': {
        'all': '/playlists',
        'add': '/playlists/add',
        'delete': '/playlists/delete',
        'edit': '/playlists/edit',
        'top_chart': '/api_album.php'
    }
}