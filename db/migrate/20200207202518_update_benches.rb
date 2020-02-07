class UpdateBenches < ActiveRecord::Migration[5.2]
  def change
    change_table :benches do |t|
      t.integer :seats, null: false
    end
  end
end
