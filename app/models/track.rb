class Track < ApplicationRecord

  validates :title, :artist_name, :artist_id, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :track_id

  has_one_attached :track_file

  has_one_attached :album_art

end
