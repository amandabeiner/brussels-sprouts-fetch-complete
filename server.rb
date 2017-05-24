require "sinatra"
require "sinatra/json"
require "json"

set :bind, '0.0.0.0'

set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get "*" do
  erb :home
end
