dragonfly = Roaster.create(:name => "Dragonfly", :geo => "Colorado")
espresso_lab = Roaster.create(:name => "The Espresso Lab", :geo => "Dubai")
sightglass = Roaster.create(:name => "Sightglass", :geo => "San Francisco")

Roast.create(
  :name => "Creme Dolce Espresso",
  :origin => "Columbia",
  :roasted_date => Date.today,
  :tasting_notes => "Caramel, Chocolate, Blueberry",
  :preparation_method => "Pour Over",
  :price => 20,
  :roaster_id => dragonfly.id
  )

Roast.create(
  :name => "Project Origin",
  :origin => "Ethiopia",
  :roasted_date => Date.today,
  :tasting_notes => "Nectarine, Orange Blossom, Lime",
  :preparation_method => "Moka Pot",
  :price => 20,
  :roaster_id => espresso_lab.id
  )

Roast.create(
  :name => "Owl's Howl",
  :origin => "Panama",
  :roasted_date => Date.today,
  :tasting_notes => "Dark Chocolate, Raspberry",
  :preparation_method => "Espresso",
  :price => 18,
  :roaster_id => sightglass.id
  )
