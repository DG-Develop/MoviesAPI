const moviesMock = [
    { "id": "65cf73dc-b7f6-4ef8-973b-f835c5017a6c", "title": "Adelheid", "year": 2006, "cover": "http://dummyimage.com/170x139.jpg/ff4444/ffffff", "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.", "duration": 66, "contentRating": "PG", "source": "http://upenn.edu/tortor/duis/mattis.jsp", "tags": ["Documentary|Musical", "Drama", "Crime|Drama|Film-Noir|Thriller"] },
    { "id": "5d4f2a12-5260-4e07-8332-e28ba21b6f93", "title": "Stargate: Continuum", "year": 2004, "cover": "http://dummyimage.com/224x135.jpg/cc0000/ffffff", "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "duration": 77, "contentRating": "G", "source": "https://weather.com/sit/amet/consectetuer/adipiscing/elit.html", "tags": ["Drama|War", "Action|Crime|Drama|Romance", "Drama", "Comedy", "Comedy|Musical|Romance"] },
    { "id": "34a73cd1-945b-401a-92d8-d36e08e083c2", "title": "Who's the Caboose?", "year": 1948, "cover": "http://dummyimage.com/167x234.bmp/cc0000/ffffff", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "duration": 142, "contentRating": "R", "source": "https://last.fm/convallis/duis/consequat/dui.jsp", "tags": ["Comedy", "Drama", "Drama|War", "Adventure", "Fantasy"] },
    { "id": "dc864d08-f561-43d2-aa56-ce0e7be32b22", "title": "The Violent Professionals", "year": 1992, "cover": "http://dummyimage.com/105x168.png/cc0000/ffffff", "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.", "duration": 172, "contentRating": "G", "source": "https://unc.edu/et/ultrices/posuere/cubilia/curae/nulla.json", "tags": ["Drama"] },
    { "id": "30af478b-11d1-4840-b0ae-a7ce5f7b9cf8", "title": "Baxter", "year": 1996, "cover": "http://dummyimage.com/109x208.png/cc0000/ffffff", "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.", "duration": 155, "contentRating": "R", "source": "http://businesswire.com/fusce/posuere.html", "tags": ["Drama|Romance", "Drama"] },
    { "id": "73a2cfac-99b9-4d66-af7b-7c65d09bcd0a", "title": "Unbeatable (Ji zhan)", "year": 2009, "cover": "http://dummyimage.com/250x104.bmp/dddddd/000000", "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "duration": 173, "contentRating": "G", "source": "http://columbia.edu/eu.jpg", "tags": ["Comedy|Crime|Mystery|Thriller", "Comedy|Crime|Thriller", "Documentary", "Drama", "Drama"] },
    { "id": "b02fa8c8-4c09-46cb-bd05-7b0b181dfd17", "title": "Gable: The King Remembered", "year": 1994, "cover": "http://dummyimage.com/150x250.bmp/cc0000/ffffff", "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.", "duration": 115, "contentRating": "G", "source": "http://gmpg.org/potenti/nullam/porttitor/lacus/at.png", "tags": ["Drama", "Comedy|Drama|Thriller", "Crime|Drama|Thriller", "Comedy|Musical|Romance", "Comedy|Drama"] },
    { "id": "a6ab8661-1e72-4327-a102-ff72b0605286", "title": "Peacekeeper, The", "year": 2006, "cover": "http://dummyimage.com/174x107.png/5fa2dd/ffffff", "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", "duration": 158, "contentRating": "R", "source": "http://csmonitor.com/vel/est/donec/odio/justo/sollicitudin.xml", "tags": ["Adventure|Animation|Children|Comedy|Fantasy", "Action|Fantasy|Horror|Thriller"] },
    { "id": "ee108106-4952-402c-9199-0a55052ec184", "title": "Fort Bliss", "year": 2013, "cover": "http://dummyimage.com/140x178.jpg/cc0000/ffffff", "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "duration": 173, "contentRating": "G", "source": "https://google.es/eget/semper/rutrum.aspx", "tags": ["Drama|Horror|Thriller", "Crime|Drama|Thriller"] },
    { "id": "4aac2568-0285-4ca5-9702-b634e0269ace", "title": "Kiss Before Dying, A", "year": 2004, "cover": "http://dummyimage.com/122x206.jpg/5fa2dd/ffffff", "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.", "duration": 62, "contentRating": "PG", "source": "http://bloglines.com/cum.jsp", "tags": ["Crime|Drama|Thriller", "Drama|Musical", "Action|Comedy|Crime|Drama"] }
]

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag))
}

class MoviesServiceMock{
    async getMovies(){
        return Promise.resolve(moviesMock)
    }

    async createMovie(){
        return Promise.resolve(moviesMock[0])
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
}