if user.avatar.attached?
  avatar = json.avatar url_for(user.avatar)
else
  avatar = nil
end

json.extract! user, :id, :username, :email, :bio, :age, :tracks, :display_name
json.avatar avatar