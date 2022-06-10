class Artist < ApplicationRecord
  belongs_to :billboard


  validates :name, presence: true 
  validates :picture, presence: true
  # validates :title, :desc, presence: true
  # validates :desc, length: { maximum: 500 }
  # t.text "name"
  # t.string "picture"
end
