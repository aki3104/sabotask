require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AppName
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.generators do |g|
      g.template_engine false
      g.assets          false
      g.helper          false
      g.test_flamework :rspec,
                       fixtures:      false,
                       view_specs:    false,
                       helper_specs:  false,
                       routing_specs: false
      g.fixture_replacement :factory_bot, dir: "spec/factories"

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
