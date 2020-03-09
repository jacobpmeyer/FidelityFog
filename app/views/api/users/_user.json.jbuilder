avatar = nil

if user.avatar.attached?
  avatar = json.avatar url_for(user.avatar)
end

json.extract! user, :id, :username, :email, :bio, :age, :tracks
avatar