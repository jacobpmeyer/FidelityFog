class Track < ApplicationRecord

  validates :title, :artist_name, :artist_id, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :artist_id

  has_one_attached :track_file

end
