from models import ( Anime, db )



def create_anime(anime,image):
    anime = Anime(anime=anime, image=image)
    db.session.add(anime)
    db.session.commit()

def get_all_anime_json():
    animes = Anime.query.all()
    if not animes:
        return []
    animes = [anime.toDict() for anime in animes]
    return animes