# N4chan SDK utility: feature_add
module N4chanUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
