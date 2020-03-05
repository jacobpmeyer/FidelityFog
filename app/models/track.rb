class Track < ApplicationRecord

  validates :title, :artist_name, :user_id, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  

end
