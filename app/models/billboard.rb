class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :playlist_name, presence: true 
  validates :description, presence: true
  validates :picture, presence: true

  # t.string "playlist_name"
  #   t.text "description"
  #   t.string "picture"
end
