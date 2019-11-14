class CreateRoasts < ActiveRecord::Migration[5.2]
  def change
    create_table :roasts do |t|
      t.string :name
      t.string :origin
      t.date :roasted_date
      t.string :preparation_method
      t.text :tasting_notes
      t.integer :price
      t.belongs_to :roaster
      t.timestamps
    end
  end
end
