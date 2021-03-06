class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true
  def self.in_bounds(bounds)
    Bench.select{|bench|
      bounds["northEast"]["lat"].to_f > bench.lat && bounds["southWest"]["lat"].to_f < bench.lat &&
      bounds["northEast"]["lng"].to_f > bench.lng && bounds["southWest"]["lng"].to_f < bench.lng
    }
  end
end
