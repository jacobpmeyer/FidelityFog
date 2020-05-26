# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

anamanaguchi = User.create(display_name: "Anamanaguchi", username: "anamanaguchi", email: "anamana@guchi.com", password: "hunter12")
ana_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/ana-av.jpg')
anamanaguchi.avatar.attach(io: ana_avatar, filename: 'anamanguchi_avatar.jpg')
ana_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/ama_banner.jpg')
anamanaguchi.banner.attach(io: ana_banner, filename: 'ama_banner.jpg')

boniver = User.create(username: "boniver", email: "boniver@test.com", display_name: "Bon Iver", password: "hunter12")
boniver_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/bon-av.jpg')
boniver.avatar.attach(io: boniver_avatar, filename: 'bon_iver_avatar.jpg')
boniver_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/bon_banner.jpg')
boniver.banner.attach(io: boniver_banner, filename: 'bon_banner.jpg')

charlixcx = User.create(username: "charlixcx", email: "charlixcx@test.com", display_name: "Charli XCX", password: "hunter12")
charlixcx_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Charli_XCX_-_Charli.png')
charlixcx.avatar.attach(io: charlixcx_avatar, filename: 'charli_avatar.png')
charlixcx_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/charli_banner.jpg')
charlixcx.banner.attach(io: charlixcx_banner, filename: 'charli_banner.jpg')

chelseacutler = User.create(username: "chelseacutler", email: "chelseacutler@test.com", display_name: "Chelsea Cutler", password: "hunter12")
chelseacutler_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/chelsea-av.jpg')
chelseacutler.avatar.attach(io: chelseacutler_avatar, filename: 'chelsea_cutler_avatar.jpg')
chelseacutler_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/chelsea_banner.jpg')
chelseacutler.banner.attach(io: chelseacutler_banner, filename: 'chelsea_banner.jpg')

childishgambino = User.create(username: "childishgambino", email: "childishgambino@test.com", display_name: "Childish Gambino", password: "hunter12")
childishgambino_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/childish-av.jpg')
childishgambino.avatar.attach(io: childishgambino_avatar, filename: "childish_gambino_avatar.jpg")
childishgambino_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/childish_banner.jpg')
childishgambino.banner.attach(io: childishgambino_banner, filename: "childish_banner.jpg")

droeloe = User.create(username: "droeloe", email: "droeloe@test.com", display_name: "Droeloe", password: "hunter12")
droeloe_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/droloe-av.jpg')
droeloe.avatar.attach(io: droeloe_avatar, filename: 'droloe_avatar.jpg')
droeloe_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/droeloe_banner.jpg')
droeloe.banner.attach(io: droeloe_banner, filename: 'droloe_banner.jpg')

flume = User.create(username: "flume", email: "flume@test.com", display_name: "Flume", password: "hunter12")
flume_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/flume-av.jpg')
flume.avatar.attach(io: flume_avatar, filename: 'flume.jpg ')
flume_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/flume_banner.jpg')
flume.banner.attach(io: flume_banner, filename: 'flume_banner.jpg ')

frank_ocean = User.create(username: "frank_ocean", email: "frank_ocean@test.com", display_name: "Frank Ocean", password: "hunter12")
frank_ocean_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/frank_ocean_av.jpeg')
frank_ocean.avatar.attach(io: frank_ocean_avatar, filename: 'frank_ocean.jpeg ')
frank_ocean_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/frank_banner.jpg')
frank_ocean.banner.attach(io: frank_ocean_banner, filename: 'frank_banner.jpg ')

jaron = User.create(username: "jaron", email: "jaron@test.com", display_name: "Jaron", password: "hunter12")
jaron_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/jaron-av.jpg')
jaron.avatar.attach(io: jaron_avatar, filename: "jaron_avatar.jpg")
jaron_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/jaron_banner.jpg')
jaron.banner.attach(io: jaron_banner, filename: "jaron_banner.jpg")

jcole = User.create(username: "jcole", email: "jcole@test.com", display_name: "J Cole", password: "hunter12")
jcole_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/jcole-av.jpg')
jcole.avatar.attach(io: jcole_avatar, filename: "jcole-av.jpg")
jcole_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/jcole_banner.jpg')
jcole.banner.attach(io: jcole_banner, filename: "jcole_banner.jpg")

kids_see_ghosts = User.create(username: "kids_see_ghosts", email: "kids_see_ghosts@test.com", display_name: "Kids See Ghosts", password: "hunter12")
kids_see_ghosts_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/kids_see_ghosts_av.jpeg')
kids_see_ghosts.avatar.attach(io: kids_see_ghosts_avatar, filename: "kids_see_ghosts_av.jpeg")
kids_see_ghosts_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/kids_see_ghosts_banner.jpg')
# kids_see_ghosts.banner.attach(io: kids_see_ghosts_banner, filename: "kids_see_ghosts_banner.jpg")

majorlazer = User.create(username: "majorlazer", email: "majorlazer@test.com", display_name: "Major Lazer", password: "hunter12")
majorlazer_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/maj-laz-av.jpg')
majorlazer.avatar.attach(io: majorlazer_avatar, filename: "majorlazer_avatar.jpg")
majorlazer_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/major_lazer_banner.jpg')
majorlazer.banner.attach(io: majorlazer_banner, filename: "major_lazer_banner.jpg")

marshmello = User.create(username: "marshmello", email: "marshmello@test.com", display_name: "Marshmello", password: "hunter12")
marshmello_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/marsh-av.jpg')
marshmello.avatar.attach(io: marshmello_avatar, filename: "marshmello_avatar.jpg")
marshmello_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/marshmello_banner.jpg')
marshmello.banner.attach(io: marshmello_banner, filename: "marshmello_banner.jpg")

maxime = User.create(username: "maxime", email: "maxime@test.com", display_name: "maxime.", password: "hunter12")
maxime_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/max-av.jpg')
maxime.avatar.attach(io: maxime_avatar, filename: "maxime_avatar.jpg")
maxime_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/maxime_banner.jpg')
maxime.banner.attach(io: maxime_banner, filename: "maxime_banner.jpg")

midnight_tyrannosaurus = User.create(username: "midnight_tyrannosaurus", email: "midnight_tyrannosaurus@test.com", display_name: "Midnight Tyrannosaurus.", password: "hunter12")
midnight_tyrannosaurus_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/mt-av.jpg')
midnight_tyrannosaurus.avatar.attach(io: midnight_tyrannosaurus_avatar, filename: "mt-av.jpg")
midnight_tyrannosaurus_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/mt_banner.jpg')
midnight_tyrannosaurus.banner.attach(io: midnight_tyrannosaurus_banner, filename: "mt_banner.jpg")

nghtmre = User.create(username: "nghtmre", email: "nghtmre@test.com", display_name: "nghtmre", password: "hunter12")
nghtmre_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/nmre-av.jpg')
nghtmre.avatar.attach(io: nghtmre_avatar, filename: "nghtmre_avatar.jpg")
nghtmre_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/nmre_banner.jpg')
nghtmre.banner.attach(io: nghtmre_banner, filename: "nmre_banner.jpg")

petitbiscuit = User.create(username: "petitbiscuit", email: "petitbiscuit@test.com", display_name: "Petit Biscuit", password: "hunter12")
petitbiscuit_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/petite-av.jpg')
petitbiscuit.avatar.attach(io: petitbiscuit_avatar, filename: "petit_biscuit_avatar.jpg")
petitbiscuit_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/petit_banner.jpg')
petitbiscuit.banner.attach(io: petitbiscuit_banner, filename: "petit_banner.jpg")

pluko = User.create(username: "pluko", email: "pluko@test.com", display_name: "pluko", password: "hunter12")
pluko_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/pluko-av.jpg')
pluko.avatar.attach(io: pluko_avatar, filename: "pluko_avatar.jpg")
pluko_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/pluko_banner.jpg')
pluko.banner.attach(io: pluko_banner, filename: "pluko_banner.jpg")

rl_grime = User.create(username: "rl_grime", email: "rl_grime@test.com", display_name: "RL Grime", password: "hunter12")
rl_grime_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/rl-av.jpg')
rl_grime.avatar.attach(io: rl_grime_avatar, filename: "rl-av.jpg")
rl_grime_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/rl_banner.jpg')
rl_grime.banner.attach(io: rl_grime_banner, filename: "rl_banner.jpg")

sanholo = User.create(username: "sanholo", email: "sanholo@test.com", display_name: "San Holo", password: "hunter12")
sanholo_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/san-av.jpg')
sanholo.avatar.attach(io: sanholo_avatar, filename: "san_holo_avatar.jpg")
sanholo_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/san_holo_banner.jpg')
sanholo.banner.attach(io: sanholo_banner, filename: "san_holo_banner.jpg")

slushii = User.create(username: "slushii", email: "slushii@test.com", display_name: "Slushii", password: "hunter12")
slushii_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/slush-av.jpg')
slushii.avatar.attach(io: slushii_avatar, filename: "slushii_avatar.jpg")
slushii_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/slushii_banner.jpg')
slushii.banner.attach(io: slushii_banner, filename: "slushii_banner.jpg")

sylvanesso = User.create(username: "sylvanesso", email: "sylvanesso@test.com", display_name: "Sylvan Esso", password: "hunter12")
sylvanesso_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/sylvan-av.jpg')
sylvanesso.avatar.attach(io: sylvanesso_avatar, filename: "sylvan_esso_avatar.jpg")
sylvanesso_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/sylvan_esso_banner.jpg')
sylvanesso.banner.attach(io: sylvanesso_banner, filename: "sylvan_esso_banner.jpg")

sza = User.create(username: "sza", email: "sza@test.com", display_name: "SZA", password: "hunter12")
sza_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/sza_av.jpeg')
sza.avatar.attach(io: sza_avatar, filename: "sza_av.jpeg")
sza_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/sza_banner.jpeg')
sza.banner.attach(io: sza_banner, filename: "sza_banner.jpeg")

tameimpala = User.create(username: "tameimpala", email: "tameimpala@test.com", display_name: "Tame Impala", password: "hunter12")
tameimpala_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/tame-av.jpg')
tameimpala.avatar.attach(io: tameimpala_avatar, filename: "tame_impala_avatar.jpg")
tameimpala_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/tame_banner.jpg')
tameimpala.banner.attach(io: tameimpala_banner, filename: "tame_banner.jpg")

the_xx = User.create(username: "the_xx", email: "the_xx@test.com", display_name: "The XX", password: "hunter12")
the_xx_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/the_xx_av.jpeg')
the_xx.avatar.attach(io: the_xx_avatar, filename: "the_xx_av.jpeg")
the_xx_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/the_xx_banner.jpg')
the_xx.banner.attach(io: the_xx_banner, filename: "the_xx_banner.jpg")

thundercat = User.create(username: "thundercat", email: "thundercat@test.com", display_name: "Thundercat", password: "hunter12")
thundercat_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/thunder-av.jpg')
thundercat.avatar.attach(io: thundercat_avatar, filename: "thundercat_avatar.jpg")
thundercat_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/thunercat_banner.jpg')
thundercat.banner.attach(io: thundercat_banner, filename: "thunercat_banner.jpg")

tokimonsta = User.create(username: "tokimonsta", email: "tokimonsta@test.com", display_name: "tokimonsta", password: "hunter12")
tokimonsta_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/toki-av.jpg')
tokimonsta.avatar.attach(io: tokimonsta_avatar, filename: "tokimonsta_avatar.jpg")
tokimonsta_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/tokimonsta_banner.jpg')
tokimonsta.banner.attach(io: tokimonsta_banner, filename: "tokimonsta_banner.jpg")

tyler_the_creator = User.create(username: "tyler_the_creator", email: "tyler_the_creator@test.com", display_name: "Tyler the Creator", password: "hunter12")
tyler_the_creator_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/tyler-av.jpg')
tyler_the_creator.avatar.attach(io: tyler_the_creator_avatar, filename: "tyler-av.jpg")
tyler_the_creator_banner = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/banners/tyler_banner.jpg')
tyler_the_creator.banner.attach(io: tyler_the_creator_banner, filename: "tyler_banner.jpg")

anamanaguchi_id = User.find_by(username: "anamanaguchi").id
lorem = Track.create(title: "Lorem Ipsum", artist_name: "Anamanaguchi", artist_id: anamanaguchi_id)
file_lorem = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Anamanaguchi+-+Lorem+Ipsum+(Arctic+Anthem).mp3")
lorem.track_file.attach(io: file_lorem, filename: "02 - Lorem Ipsum (Arctic Anthem).flac")
art_lorem = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/anamana.jpg")
lorem.album_art.attach(io: art_lorem, filename: "anamana.jpg")

boniver_id = User.find_by(username: "boniver").id
ma = Track.create(title: "Hey, Ma", artist_name: "Bon Iver", artist_id: boniver_id)
file_ma = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Bon+Iver+-+Hey%2C+Ma.mp3")
ma.track_file.attach(io: file_ma, filename: "05 - Hey, Ma.flac")
art_ma = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/boniver.jpg")
ma.album_art.attach(io: art_ma, filename: "cover.jpg")

charlixcx_id = User.find_by(username: "charlixcx").id
official = Track.create(title: "Official", artist_name: "Charli XCX", artist_id: charlixcx_id)
file_official = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Charli+XCX+-+Official.mp3")
official.track_file.attach(io: file_official, filename: "Official.flac")
art_official = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Charli_XCX_-_Charli.png")
official.album_art.attach(io: art_official, filename: "charli_avatar.jpg")

chelseacutler_id = User.find_by(username: "chelseacutler").id
reason = Track.create(title: "The Reason", artist_name: "Chelsea Cutler", artist_id: chelseacutler_id)
file_reason = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Chelsea+Cutler+-+The+Reason.mp3")
reason.track_file.attach(io: file_reason, filename: "Chelsea Cutler - The Reason.flac")
art_reason = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/chelsea.jpg")
reason.album_art.attach(io: art_reason, filename: "the_reason.jpg")

childishgambino_id = User.find_by(username: "childishgambino").id
america = Track.create(title: "This is America", artist_name: "Childish Gambino", artist_id: childishgambino_id)
file_america = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Childish+Gambino+-+This+Is+America.mp3")
america.track_file.attach(io: file_america, filename: "Childish Gambino - This Is America.flac")
art_america = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/childis.jpg")
america.album_art.attach(io: art_america, filename: "folder.jpg")

droeloe_id = User.find_by(username: "droeloe").id
friends = Track.create(title: "Virtual Friends", artist_name: "Droeloe", artist_id: droeloe_id)
file_friends = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/DROELOE+-+Virtual+Friends.mp3")
friends.track_file.attach(io: file_friends, filename: "02 - Virtual Friends.flac")
art_friends = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/droeloe.jpeg")
friends.album_art.attach(io: art_friends, filename: "cover.jpg")

flume_id = User.find_by(username: "flume").id
voices = Track.create(title: "Voices", artist_name: "Flume", artist_id: flume_id)
file_voices = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Flume+-+Voices.mp3")
voices.track_file.attach(io: file_voices, filename: "10 - Voices.flac")
art_voices = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/flume.jpg")
voices.album_art.attach(io: art_voices, filename: "cover.jpg")

flume_id = User.find_by(username: "flume").id
say_it = Track.create(title: "Say It", artist_name: "Flume", artist_id: flume_id)
file_say_it = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Flume+-+Say+It+(feat.+Tove+Lo)+%5BIllenium+Remix%5D.mp3")
say_it.track_file.attach(io: file_say_it, filename: "Flume - Say It (feat. Tove Lo) [Illenium Remix].mp3")
art_say_it = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/flume_skin.jpg")
say_it.album_art.attach(io: art_say_it, filename: "cover.jpg")

frank_ocean_id = User.find_by(username: "frank_ocean").id
nikes = Track.create(title: "Nikes", artist_name: "Frank Ocean", artist_id: frank_ocean_id)
file_nikes = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Frank+Ocean+-+Nikes.mp3")
nikes.track_file.attach(io: file_nikes, filename: "Frank Ocean - Nikes.mp3")
art_nikes = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/frank_ocean_blonde.jpeg")
nikes.album_art.attach(io: art_nikes, filename: "cover.jpg")

jaron_id = User.find_by(username: "jaron").id
sonder = Track.create(title: "Sonder", artist_name: "Jaron", artist_id: jaron_id)
file_sonder = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/JaRon+-+Sonder.mp3")
sonder.track_file.attach(io: file_sonder, filename: "JaRon - Sonder.flac")
art_sonder = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/jaron.jpg")
sonder.album_art.attach(io: art_sonder, filename: "sonder.jpg")

jcole_id = User.find_by(username: "jcole").id
kevins_heart = Track.create(title: "Kevin's Heart", artist_name: "J Cole", artist_id: jcole_id)
file_kevins_heart = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/J.+Cole+-+Kevin%E2%80%99s+Heart.mp3")
kevins_heart.track_file.attach(io: file_kevins_heart, filename: "J. Cole - Kevin’s Heart.mp3")
art_kevins_heart = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/jcole.jpg")
kevins_heart.album_art.attach(io: art_kevins_heart, filename: "jcole.jpg")

kids_see_ghosts_id = User.find_by(username: "kids_see_ghosts").id
reborn = Track.create(title: "Reborn", artist_name: "Kids See Ghosts", artist_id: kids_see_ghosts_id)
file_reborn = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/KIDS+SEE+GHOSTS+-+Reborn.mp3")
reborn.track_file.attach(io: file_reborn, filename: "KIDS SEE GHOSTS - Reborn.mp3")
art_reborn = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/kids_see_ghosts.jpg")
reborn.album_art.attach(io: art_reborn, filename: "kids_see_ghosts.jpg")

majorlazer_id = User.find_by(username: "majorlazer").id
water = Track.create(title: "Cold Water", artist_name: "Major Lazer", artist_id: majorlazer_id)
file_water = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Major+Lazer+-+Cold+Water.mp3")
water.track_file.attach(io: file_water, filename: "1 - Major Lazer - Cold Water.flac")
art_water = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/major.jpg")
water.album_art.attach(io: art_water, filename: "folder.jpg ")

marshmello_id = User.find_by(username: "marshmello").id
fly = Track.create(title: "Fly", artist_name: "Marshmello", artist_id: marshmello_id)
file_fly = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Marshmello+-+Fly.mp3")
fly.track_file.attach(io: file_fly, filename: "1 - Marshmello - Fly.flac")
art_fly = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/marshmello.jpg")
fly.album_art.attach(io: art_fly, filename: "folder.jpg")

maxime_id = User.find_by(username: "maxime").id
stuart = Track.create(title: "Stuart", artist_name: "maxime.", artist_id: maxime_id)
file_stuart = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/maxime.+-+Stuart.mp3")
stuart.track_file.attach(io: file_stuart, filename: "06 - Stuart.flac")
art_stuart = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/maxime.jpg")
stuart.album_art.attach(io: art_stuart, filename: "cover.jpg")

midnight_tyrannosaurus_id = User.find_by(username: "midnight_tyrannosaurus").id
banana_planet = Track.create(title: "Banana Planet", artist_name: "Midnight Tyrannosaurus.", artist_id: midnight_tyrannosaurus_id)
file_banana_planet = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Midnight+Tyrannosaurus+-+Banana+Planet.mp3")
banana_planet.track_file.attach(io: file_banana_planet, filename: "Midnight Tyrannosaurus - Banana Planet.mp3")
art_banana_planet = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/mtyran.jpg")
banana_planet.album_art.attach(io: art_banana_planet, filename: "cover.jpg")

nghtmre_id = User.find_by(username: "nghtmre").id
gud = Track.create(title: "GUD VIBRATIONS", artist_name: "NGHTMRE & SLANDER", artist_id: nghtmre_id)
file_gud = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/NGHTMRE+%26+SLANDER+-+GUD+VIBRATIONS.mp3")
gud.track_file.attach(io: file_gud, filename: "NGHTMRE & SLANDER - GUD VIBRATIONS.flac")
art_gud = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/nmre.jpg")
gud.album_art.attach(io: art_gud, filename: "folder.jpg ")

petitbiscuit_id = User.find_by(username: "petitbiscuit").id
lover = Track.create(title: "Sunset Lover", artist_name: "Petit Biscuit", artist_id: petitbiscuit_id)
file_lover = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Petit+Biscuit+-+Sunset+Lover.mp3")
lover.track_file.attach(io: file_lover, filename: "12 - Sunset Lover.flac")
art_lover = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/petite.jpg")
lover.album_art.attach(io: art_lover, filename: "cover.jpg")

pluko_id = User.find_by(username: "pluko").id
love = Track.create(title: "l o v e", artist_name: "pluko", artist_id: pluko_id)
file_love = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/pluko+-+l+o+v+e.mp3")
love.track_file.attach(io: file_love, filename: "pluko - l o v e.flac")
art_love = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/pluko.jpg")
love.album_art.attach(io: art_love, filename: "love.jpg")

rl_grime_id = User.find_by(username: "rl_grime").id
ucla = Track.create(title: "UCLA", artist_name: "RL Grime", artist_id: rl_grime_id)
file_ucla = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/RL+Grime+-+UCLA.mp3")
ucla.track_file.attach(io: file_ucla, filename: "RL Grime - UCLA.mp3")
art_ucla = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/rlgrime.jpg")
ucla.album_art.attach(io: art_ucla, filename: "rlgrime.jpg")

sanholo_id = User.find_by(username: "sanholo").id
brighter = Track.create(title: "Brighter Days", artist_name: "San Holo", artist_id: sanholo_id)
file_brighter = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/San+Holo+-+brighter+days.mp3")
brighter.track_file.attach(io: file_brighter, filename: "04 - brighter days.flac")
art_brighter = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/sanholo.jpeg")
brighter.album_art.attach(io: art_brighter, filename: "cover.jpg")

slushii_id = User.find_by(username: "slushii").id
dreamingofyou = Track.create(title: "Dreaming of You", artist_name: "Slushii", artist_id: slushii_id)
file_dreamingofyou = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Slushii+-+Dreaming+of+You.mp3")
dreamingofyou.track_file.attach(io: file_dreamingofyou, filename: "Slushii - Dreaming of You.flac")
art_dreamingofyou = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/slushii.jpg")
dreamingofyou.album_art.attach(io: art_dreamingofyou, filename: "dreaming.jpg")

sylvanesso_id = User.find_by(username: "sylvanesso").id
wolf = Track.create(title: "Wolf", artist_name: "Sylvan Esso", artist_id: sylvanesso_id)
file_wolf = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Sylvan+Esso+-+Wolf.mp3")
wolf.track_file.attach(io: file_wolf, filename: "4 - Sylvan Esso - Wolf.flac")
art_wolf = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/sylvan.jpg")
wolf.album_art.attach(io: art_wolf, filename: "folder.jpg")

sza_id = User.find_by(username: "sza").id
go_gina = Track.create(title: "Go Gina", artist_name: "SZA", artist_id: sza_id)
file_go_gina = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/SZA+-+Go+Gina.mp3")
go_gina.track_file.attach(io: file_go_gina, filename: "SZA - Go Gina.mp3")
art_go_gina = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/sza_ctrl.jpg")
go_gina.album_art.attach(io: art_go_gina, filename: "sza_ctrl.jpg")

tameimpala_id = User.find_by(username: "tameimpala").id
lost = Track.create(title: "Lost In Yesterday", artist_name: "Tame Impala", artist_id: tameimpala_id)
file_lost = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Tame+Impala+-+Lost+In+Yesterday.mp3")
lost.track_file.attach(io: file_lost, filename: "08 - Lost In Yesterday.flac")
art_lost = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/tame.jpg")
lost.album_art.attach(io: art_lost, filename: "cover.jpg")

thundercat_id = User.find_by(username: "thundercat").id
dbdurag = Track.create(title: "Dragonball Durag", artist_name: "Thundercat", artist_id: thundercat_id)
file_dbdurag = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Thundercat+-+Dragonball+Durag.flac")
dbdurag.track_file.attach(io: file_dbdurag, filename: "Thundercat - Dragonball Durag.flac")
art_dbdurag = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/thundercat.jpeg")
dbdurag.album_art.attach(io: art_dbdurag, filename: "thundercat.jpeg")

thundercat_id = User.find_by(username: "thundercat").id
fans_mail = Track.create(title: "A Fan's Mail (Tron Song Suite II)", artist_name: "Thundercat", artist_id: thundercat_id)
file_fans_mail = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Thundercat+-+A+Fan's+Mail+(Tron+Song+Suite+II).mp3")
fans_mail.track_file.attach(io: file_fans_mail, filename: "Thundercat - A Fan's Mail (Tron Song Suite II).mp3")
art_fans_mail = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/thundercat_drunk.jpg")
fans_mail.album_art.attach(io: art_fans_mail, filename: "thundercat_drunk.jpg")

the_xx_id = User.find_by(username: "the_xx").id
say_something_loving = Track.create(title: "Say Something Loving", artist_name: "The XX", artist_id: the_xx_id)
file_say_something_loving = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/The+xx+-+Say+Something+Loving.mp3")
say_something_loving.track_file.attach(io: file_say_something_loving, filename: "The xx - Say Something Loving.mp3")
art_say_something_loving = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/xx_i_see_you.jpg")
say_something_loving.album_art.attach(io: art_say_something_loving, filename: "xx_i_see_you.jpg")

tokimonsta_id = User.find_by(username: "tokimonsta").id
oneday = Track.create(title: "One Day", artist_name: "tokimonsta", artist_id: tokimonsta_id)
file_oneday = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/TOKiMONSTA+-+One+Day.mp3")
oneday.track_file.attach(io: file_oneday, filename: "TOKiMONSTA - One Day.flac")
art_oneday = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/toki.jpg")
oneday.album_art.attach(io: art_oneday, filename: "one_day.jpg")

tyler_the_creator_id = User.find_by(username: "tyler_the_creator").id
earfquake = Track.create(title: "EARFQUAKE", artist_name: "Tyler the Creator", artist_id: tyler_the_creator_id)
file_earfquake = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Tyler%2C+The+Creator+-+EARFQUAKE.mp3")
earfquake.track_file.attach(io: file_earfquake, filename: "Tyler, The Creator - EARFQUAKE.mp3")
art_earfquake = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/tyler.jpg")
earfquake.album_art.attach(io: art_earfquake, filename: "tyler.jpg")

