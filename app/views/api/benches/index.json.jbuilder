@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :seats, :lat, :lng
  end
end