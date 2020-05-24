
avatar = nil
banner = nil
if user.avatar.attached?
  avatar = json.avatar url_for(user.avatar)
end
if user.banner.attached?
  banner = json.banner url_for(user.banner)

json.extract! user, :id, :username, :email, :bio, :age, :tracks, :display_name
json.avatar avatar
json.banner banner
