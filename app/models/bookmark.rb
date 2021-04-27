class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  validates_associated :movie, :list
  validates :comment, length: { minimum: 6 }
  validates :movie, uniqueness: { scope: :list }
end
