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

boniver = User.create(username: "boniver", email: "boniver@test.com", display_name: "Bon Iver", password: "hunter12")
boniver_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/bon-av.jpg')
boniver.avatar.attach(io: boniver_avatar, filename: 'bon_iver_avatar.jpg')

charlixcx = User.create(username: "charlixcx", email: "charlixcx@test.com", display_name: "Charli XCX", password: "hunter12")
charlixcx_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/Charli_XCX_-_Charli.png')
charlixcx.avatar.attach(io: charlixcx_avatar, filename: 'charli_avatar.png')

chelseacutler = User.create(username: "chelseacutler", email: "chelseacutler@test.com", display_name: "Chelsea Cutler", password: "hunter12")
chelseacutler_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/chelsea-av.jpg')
chelseacutler.avatar.attach(io: chelseacutler_avatar, filename: 'chelsea_cutler_avatar.jpg')

childishgambino = User.create(username: "childishgambino", email: "childishgambino@test.com", display_name: "Childish Gambino", password: "hunter12")
childishgambino_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/childish-av.jpg')
childishgambino.avatar.attach(io: childishgambino_avatar, filename: "childish_gambino_avatar.jpg")

droeloe = User.create(username: "droeloe", email: "droeloe@test.com", display_name: "Droeloe", password: "hunter12")
droeloe_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/droloe-av.jpg')
droeloe.avatar.attach(io: droeloe_avatar, filename: 'droloe_avatar.jpg')

flume = User.create(username: "flume", email: "flume@test.com", display_name: "Flume", password: "hunter12")
flume_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/flume-av.jpg')
flume.avatar.attach(io: flume_avatar, filename: 'flume.jpg ')

jaron = User.create(username: "jaron", email: "jaron@test.com", display_name: "Jaron", password: "hunter12")
jaron_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/jaron-av.jpg')
jaron.avatar.attach(io: jaron_avatar, filename: "jaron_avatar.jpg")

majorlazer = User.create(username: "majorlazer", email: "majorlazer@test.com", display_name: "Major Lazer", password: "hunter12")
majorlazer_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/maj-laz-av.jpg')
majorlazer.avatar.attach(io: majorlazer_avatar, filename: "majorlazer_avatar.jpg")

marshmello = User.create(username: "marshmello", email: "marshmello@test.com", display_name: "Marshmello", password: "hunter12")
marshmello_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/marsh-av.jpg')
marshmello.avatar.attach(io: marshmello_avatar, filename: "marshmello_avatar.jpg")

maxime = User.create(username: "maxime", email: "maxime@test.com", display_name: "maxime.", password: "hunter12")
maxime_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/max-av.jpg')
maxime.avatar.attach(io: maxime_avatar, filename: "maxime_avatar.jpg")

nghtmre = User.create(username: "nghtmre", email: "nghtmre@test.com", display_name: "nghtmre", password: "hunter12")
nghtmre_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/nmre-av.jpg')
nghtmre.avatar.attach(io: nghtmre_avatar, filename: "nghtmre_avatar.jpg")

petitbiscuit = User.create(username: "petitbiscuit", email: "petitbiscuit@test.com", display_name: "Petit Biscuit", password: "hunter12")
petitbiscuit_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/petite-av.jpg')
petitbiscuit.avatar.attach(io: petitbiscuit_avatar, filename: "petit_biscuit_avatar.jpg")

pluko = User.create(username: "pluko", email: "pluko@test.com", display_name: "pluko", password: "hunter12")
pluko_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/pluko-av.jpg')
pluko.avatar.attach(io: pluko_avatar, filename: "pluko_avatar.jpg")

sanholo = User.create(username: "sanholo", email: "sanholo@test.com", display_name: "San Holo", password: "hunter12")
sanholo_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/san-av.jpg')
sanholo.avatar.attach(io: sanholo_avatar, filename: "san_holo_avatar.jpg")

slushii = User.create(username: "slushii", email: "slushii@test.com", display_name: "Slushii", password: "hunter12")
slushii_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/slush-av.jpg')
slushii.avatar.attach(io: slushii_avatar, filename: "slushii_avatar.jpg")

sylvanesso = User.create(username: "sylvanesso", email: "sylvanesso@test.com", display_name: "Sylvan Esso", password: "hunter12")
sylvanesso_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/sylvan-av.jpg')
sylvanesso.avatar.attach(io: sylvanesso_avatar, filename: "sylvan_esso_avatar.jpg")

tameimpala = User.create(username: "tameimpala", email: "tameimpala@test.com", display_name: "Tame Impala", password: "hunter12")
tameimpala_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/tame-av.jpg')
tameimpala.avatar.attach(io: tameimpala_avatar, filename: "tame_impala_avatar.jpg")

thundercat = User.create(username: "thundercat", email: "thundercat@test.com", display_name: "Thundercat", password: "hunter12")
thundercat_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/thunder-av.jpg')
thundercat.avatar.attach(io: thundercat_avatar, filename: "thundercat_avatar.jpg")

tokimonsta = User.create(username: "tokimonsta", email: "tokimonsta@test.com", display_name: "tokimonsta", password: "hunter12")
tokimonsta_avatar = open('https://fidelityfog-seed.s3.us-east-2.amazonaws.com/avs/toki-av.jpg')
tokimonsta.avatar.attach(io: tokimonsta_avatar, filename: "tokimonsta_avatar.jpg")

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

jaron_id = User.find_by(username: "jaron").id
sonder = Track.create(title: "Sonder", artist_name: "Jaron", artist_id: jaron_id)
file_sonder = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/JaRon+-+Sonder.mp3")
sonder.track_file.attach(io: file_sonder, filename: "JaRon - Sonder.flac")
art_sonder = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/jaron.jpg")
sonder.album_art.attach(io: art_sonder, filename: "sonder.jpg")

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
dbdurag.album_art.attach(io: art_dbdurag, filename: "dbd.jpeg")

tokimonsta_id = User.find_by(username: "tokimonsta").id
oneday = Track.create(title: "One Day", artist_name: "tokimonsta", artist_id: tokimonsta_id)
file_oneday = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/TOKiMONSTA+-+One+Day.mp3")
oneday.track_file.attach(io: file_oneday, filename: "TOKiMONSTA - One Day.flac")
art_oneday = open("https://fidelityfog-seed.s3.us-east-2.amazonaws.com/toki.jpg")
oneday.album_art.attach(io: art_oneday, filename: "one_day.jpg")

