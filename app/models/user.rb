class User < ApplicationRecord
  attr_reader :password

  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :tracks,
    class_name: :Track,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :user_id

  has_one_attached :avatar

  def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token  
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
