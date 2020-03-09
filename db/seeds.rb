# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

anamanaguchi = User.create(display_name: "Anamanaguchi", username: "anamanaguchi", email: "anamana@guchi.com", password: "hunter12")
ana_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/anamanguchi/anamanguchi_avatar.jpg')
anamanaguchi.avatar.attach(io: ana_avatar, filename: 'anamanguchi_avatar.jpg')

boniver = User.create(username: "boniver", email: "boniver@test.com", display_name: "Bon Iver", password: "hunter12")
boniver_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/bon_iver/bon_iver_avatar.jpg')
boniver.avatar.attach(io: boniver_avatar, filename: 'bon_iver_avatar.jpg')

charlixcx = User.create(username: "charlixcx", email: "charlixcx@test.com", display_name: "Charli XCX", password: "hunter12")
charlixcx_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chali_xcx/charli_avatar.jpg')
charlixcx.avatar.attach(io: charlixcx_avatar, filename: 'charli_avatar.jpg')

chelseacutler = User.create(username: "chelseacutler", email: "chelseacutler@test.com", display_name: "Chelsea Cutler", password: "hunter12")
chelseacutler_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chelsea_cutler/chelsea_cutler_avatar.jpg')
chelseacutler.avatar.attach(io: chelseacutler_avatar, filename: 'chelsea_cutler_avatar.jpg')

childishgambino = User.create(username: "childishgambino", email: "childishgambino@test.com", display_name: "Childish Gambino", password: "hunter12")
childishgambino_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/childish_gambino/childish_gambino_avatar.jpg')
childishgambino.avatar.attach(io: childishgambino_avatar, filename: "childish_gambino_avatar.jpg")

droeloe = User.create(username: "droeloe", email: "droeloe@test.com", display_name: "Droeloe", password: "hunter12")
droeloe_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/droloe/droloe_avatar.jpg')
droeloe.avatar.attach(io: droeloe_avatar, filename: 'droloe_avatar.jpg')

flume = User.create(username: "flume", email: "flume@test.com", display_name: "Flume", password: "hunter12")
flume_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/flume/flume.jpg')
flume.avatar.attach(io: flume_avatar, filename: 'flume.jpg ')

jaron = User.create(username: "jaron", email: "jaron@test.com", display_name: "Jaron", password: "hunter12")
jaron_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/jaron/jaron_avatar.jpg')
jaron.avatar.attach(io: jaron_avatar, filename: "aron_avatar.jpg")

majorlazer = User.create(username: "majorlazer", email: "majorlazer@test.com", display_name: "Major Lazer", password: "hunter12")
majorlazer_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/major_lazer/major_lazer_avatar.jpg')
majorlazer.avatar.attach(io: majorlazer_avatar, filename: "https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/major_lazer/major_lazer_avatar.jpg")

marshmello = User.create(username: "marshmello", email: "marshmello@test.com", display_name: "Marshmello", password: "hunter12")
marshmello_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/marshmello/marshmello_avatar.jpg')
marshmello.avatar.attach(io: marshmello_avatar, filename: "marshmello_avatar.jpg")

maxime = User.create(username: "maxime", email: "maxime@test.com", display_name: "maxime.", password: "hunter12")
maxime_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/maxime/maxime_avatar.jpg')
maxime.avatar.attach(io: maxime_avatar, filename: "maxime_avatar.jpg")

nghtmre = User.create(username: "nghtmre", email: "nghtmre@test.com", display_name: "nghtmre", password: "hunter12")
nghtmre_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/nghtmre/nghtmre_avatar.jpg')
nghtmre.avatar.attach(io: nghtmre_avatar, filename: "nghtmre_avatar.jpg")

petitbiscuit = User.create(username: "petitbiscuit", email: "petitbiscuit@test.com", display_name: "Petit Biscuit", password: "hunter12")
petitbiscuit_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/petite_biscuit/petit_biscuit_avatar.jpg')
petitbiscuit.avatar.attach(io: petitbiscuit_avatar, filename: "petit_biscuit_avatar.jpg")

pluko = User.create(username: "pluko", email: "pluko@test.com", display_name: "pluko", password: "hunter12")
pluko_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/pluko/pluko_avatar.jpg')
pluko.avatar.attach(io: pluko_avatar, filename: "pluko_avatar.jpg")

sanholo = User.create(username: "sanholo", email: "sanholo@test.com", display_name: "San Holo", password: "hunter12")
sanholo_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/san_holo/san_holo_avatar.jpg')
sanholo.avatar.attach(io: sanholo_avatar, filename: "san_holo_avatar.jpg")

slushii = User.create(username: "slushii", email: "slushii@test.com", display_name: "Slushii", password: "hunter12")
slushii_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/slushii/slushii_avatar.jpg')
slushii.avatar.attach(io: slushii_avatar, filename: "slushii_avatar.jpg")

sylvanesso = User.create(username: "sylvanesso", email: "sylvanesso@test.com", display_name: "Sylvan Esso", password: "hunter12")
sylvanesso_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/sylvan_esso/sylvan_esso_avatar.jpg')
sylvanesso.avatar.attach(io: sylvanesso_avatar, filename: "sylvan_esso_avatar.jpg")

tameimpala = User.create(username: "tameimpala", email: "tameimpala@test.com", display_name: "Tame Impala", password: "hunter12")
tameimpala_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tame_impala/tame_impala_avatar.jpg')
tameimpala.avatar.attach(io: tameimpala_avatar, filename: "tame_impala_avatar.jpg")

thundercat = User.create(username: "thundercat", email: "thundercat@test.com", display_name: "Thundercat", password: "hunter12")
thundercat_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/thundercat/thundercat_avatar.jpg')
thundercat.avatar.attach(io: thundercat_avatar, filename: "thundercat_avatar.jpg")

tokimonsta = User.create(username: "tokimonsta", email: "tokimonsta@test.com", display_name: "tokimonsta", password: "hunter12")
tokimonsta_avatar = open('https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tokimonsta/tokimonsta_avatar.jpg')
tokimonsta.avatar.attach(io: tokimonsta_avatar, filename: "tokimonsta_avatar.jpg")


lorem = Track.create(title: "Lorem Ipsum", artist_name: "Anamanaguchi", artist_id: 13)
file_lorem = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/anamanguchi/02+-+Lorem+Ipsum+(Arctic+Anthem).flac")
lorem.track_file.attach(io: file_lorem, filename: "02 - Lorem Ipsum (Arctic Anthem).flac")
art_lorem = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/anamanguchi/cover.jpg")
lorem.album_art.attach(io: art_lorem, filename: "cover.jpg")

ma = Track.create(title: "Hey, Ma", artist_name: "Bon Iver", artist_id: 14)
file_ma = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/bon_iver/05+-+Hey%2C+Ma.flac")
ma.track_file.attach(io: file_ma, filename: "05 - Hey, Ma.flac")
art_ma = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/bon_iver/cover.jpg")
ma.album_art.attach(io: art_ma, filename: "cover.jpg")

official = Track.create(title: "Official", artist_name: "Charli XCX", artist_id: 15)
file_official = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chali_xcx/Official.flac")
official.track_file.attach(io: file_official, filename: "Official.flac")
art_official = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chali_xcx/charli_avatar.jpg")
official.album_art.attach(io: art_official, filename: "charli_avatar.jpg")

reason = Track.create(title: "The Reason", artist_name: "Chelsea Cutler", artist_id: 16)
file_reason = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chelsea_cutler/Chelsea+Cutler+-+The+Reason.flac")
reason.track_file.attach(io: file_reason, filename: "Chelsea Cutler - The Reason.flac")
art_reason = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/chelsea_cutler/the_reason.jpg")
reason.album_art.attach(io: art_reason, filename: "the_reason.jpg")

america = Track.create(title: "This is America", artist_name: "Childish Gambino", artist_id: 17)
file_america = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/childish_gambino/Childish+Gambino+-+This+Is+America.flac")
america.track_file.attach(io: file_america, filename: "Childish Gambino - This Is America.flac")
art_america = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/childish_gambino/folder.jpg")
america.album_art.attach(io: art_america, filename: "folder.jpg")

friends = Track.create(title: "Virtual Friends", artist_name: "Droeloe", artist_id: 18)
file_friends = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/droloe/02+-+Virtual+Friends.flac")
friends.track_file.attach(io: file_friends, filename: "02 - Virtual Friends.flac")
art_friends = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/droloe/cover.jpg")
friends.album_art.attach(io: art_friends, filename: "cover.jpg")

voices = Track.create(title: "Voices", artist_name: "Flume", artist_id: 19)
file_voices = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/flume/10+-+Voices.flac")
voices.track_file.attach(io: file_voices, filename: "10 - Voices.flac")
art_voices = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/flume/cover.jpg")
voices.album_art.attach(io: art_voices, filename: "cover.jpg")

sonder = Track.create(title: "Sonder", artist_name: "Jaron", artist_id: 20)
file_sonder = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/jaron/JaRon+-+Sonder.flac")
sonder.track_file.attach(io: file_sonder, filename: "JaRon - Sonder.flac")
art_sonder = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/jaron/sonder.jpg")
sonder.album_art.attach(io: art_sonder, filename: "sonder.jpg")

water = Track.create(title: "Cold Water", artist_name: "Major Lazer", artist_id: 21)
file_water = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/major_lazer/1+-+Major+Lazer+-+Cold+Water.flac")
water.track_file.attach(io: file_water, filename: "1 - Major Lazer - Cold Water.flac")
art_water = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/major_lazer/folder.jpg")
water.album_art.attach(io: art_water, filename: "folder.jpg ")

fly = Track.create(title: "Fly", artist_name: "Marshmello", artist_id: 22)
file_fly = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/marshmello/1+-+Marshmello+-+Fly.flac")
fly.track_file.attach(io: file_fly, filename: "1 - Marshmello - Fly.flac")
art_fly = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/marshmello/folder.jpg")
fly.album_art.attach(io: art_fly, filename: "folder.jpg")

stuart = Track.create(title: "Stuart", artist_name: "maxime.", artist_id: 23)
file_stuart = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/maxime/06+-+Stuart.flac")
stuart.track_file.attach(io: file_stuart, filename: "06 - Stuart.flac")
art_stuart = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/maxime/cover.jpg")
stuart.album_art.attach(io: art_stuart, filename: "cover.jpg")

gud = Track.create(title: "GUD VIBRATIONS", artist_name: "NGHTMRE & SLANDER", artist_id: 24)
file_gud = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/nghtmre/NGHTMRE+%26+SLANDER+-+GUD+VIBRATIONS.flac")
gud.track_file.attach(io: file_gud, filename: "NGHTMRE & SLANDER - GUD VIBRATIONS.flac")
art_gud = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/nghtmre/folder.jpg")
gud.album_art.attach(io: art_gud, filename: "folder.jpg ")

lover = Track.create(title: "Sunset Lover", artist_name: "Petit Biscuit", artist_id: 25)
file_lover = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/petite_biscuit/12+-+Sunset+Lover.flac")
lover.track_file.attach(io: file_lover, filename: "12 - Sunset Lover.flac")
art_lover = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/petite_biscuit/cover.jpg")
lover.album_art.attach(io: art_lover, filename: "cover.jpg")

love = Track.create(title: "l o v e", artist_name: "pluko", artist_id: 26)
file_love = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/pluko/pluko+-+l+o+v+e.flac")
love.track_file.attach(io: file_love, filename: "pluko - l o v e.flac")
art_love = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/pluko/love.jpg")
love.album_art.attach(io: art_love, filename: "love.jpg")

brighter = Track.create(title: "Brighter Days", artist_name: "San Holo", artist_id: 27)
file_brighter = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/san_holo/04+-+brighter+days.flac")
brighter.track_file.attach(io: file_brighter, filename: "04 - brighter days.flac")
art_brighter = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/san_holo/cover.jpg")
brighter.album_art.attach(io: art_brighter, filename: "cover.jpg")

dreamingofyou = Track.create(title: "Dreaming of You", artist_name: "Slushii", artist_id: 28)
file_dreamingofyou = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/slushii/Slushii+-+Dreaming+of+You.flac")
dreamingofyou.track_file.attach(io: file_dreamingofyou, filename: "Slushii - Dreaming of You.flac")
art_dreamingofyou = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/slushii/dreaming.jpg")
dreamingofyou.album_art.attach(io: art_dreamingofyou, filename: "dreaming.jpg")

wolf = Track.create(title: "Wolf", artist_name: "Sylvan Esso", artist_id: 29)
file_wolf = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/sylvan_esso/4+-+Sylvan+Esso+-+Wolf.flac")
wolf.track_file.attach(io: file_wolf, filename: "4 - Sylvan Esso - Wolf.flac")
art_wolf = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/sylvan_esso/folder.jpg")
wolf.album_art.attach(io: art_wolf, filename: "folder.jpg")

lost = Track.create(title: "Lost In Yesterday", artist_name: "Tame Impala", artist_id: 30)
file_lost = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tame_impala/08+-+Lost+In+Yesterday.flac")
lost.track_file.attach(io: file_lost, filename: "08 - Lost In Yesterday.flac")
art_lost = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tame_impala/cover.jpg")
lost.album_art.attach(io: art_lost, filename: "cover.jpg")

dbdurag = Track.create(title: "Dragonball Durag", artist_name: "Thundercat", artist_id: 31)
file_dbdurag = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/thundercat/Thundercat+-+Dragonball+Durag.flac")
dbdurag.track_file.attach(io: file_dbdurag, filename: "Thundercat - Dragonball Durag.flac")
art_dbdurag = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/thundercat/dbd.jpeg")
dbdurag.album_art.attach(io: art_dbdurag, filename: "dbd.jpeg")

oneday = Track.create(title: "One Day", artist_name: "tokimonsta", artist_id: 32)
file_oneday = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tokimonsta/TOKiMONSTA+-+One+Day.flac")
oneday.track_file.attach(io: file_oneday, filename: "TOKiMONSTA - One Day.flac")
art_oneday = open("https://fidelity-fog-seed.s3.us-east-2.amazonaws.com/tokimonsta/one_day.jpg")
oneday.album_art.attach(io: art_oneday, filename: "one_day.jpg")

