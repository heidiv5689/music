class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.text :name
      t.string :picture
      t.string :string
      t.belongs_to :billboard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
