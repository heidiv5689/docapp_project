class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :first
      t.string :last
      t.string :image
      t.string :speciality

      t.timestamps
    end
  end
end
