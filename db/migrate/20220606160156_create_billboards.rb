class CreateBillboards < ActiveRecord::Migration[7.0]
  def change
    create_table :billboards do |t|
      t.string :playlist_name
      t.text :description
      t.string :picture
      t.string :string

      t.timestamps
    end
  end
end
