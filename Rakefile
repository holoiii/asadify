# encoding: utf-8

require 'rubygems'
require 'bundler'
begin
  Bundler.setup(:default, :development)
rescue Bundler::BundlerError => e
  $stderr.puts e.message
  $stderr.puts "Run `bundle install` to install missing gems"
  exit e.status_code
end
require 'rake'

require 'jeweler'
Jeweler::Tasks.new do |gem|
  # gem is a Gem::Specification... see http://docs.rubygems.org/read/chapter/20 for more options
  gem.name = "asadify"
  gem.homepage = "http://github.com/holoiii/asadify"
  gem.license = "MIT"
  gem.summary = %Q{Asadify your site.}
  gem.description = %Q{Asadify your site.}
  gem.email = "albert.peng@cureus.com"
  gem.authors = ["Albert Peng"]
  # dependencies defined in Gemfile
end
Jeweler::RubygemsDotOrgTasks.new
