# N4chan SDK control

class N4chanControl
  attr_accessor :throw_err, :err, :explain

  def initialize(opts = {})
    @throw_err = opts[:throw_err]
    @err = nil
    @explain = opts[:explain]
  end
end
