class Game < ApplicationRecord
    has_many :reviews

    def calculate_average
        return 0 unless reviews.size.positive?
    
        avg = reviews.average(:score).to_f.round(2) * 100
        update_column(:average_score, avg)
      end
end
