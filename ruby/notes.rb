# =====  Strings =====

"string".reverse						# Returns the string reversed
"string".length							# Returns the length of the string
"string" * 5							# Returns "stringstringstringstringstring"
print poem								# Returns the poem string
										# "My toast has flown from my hand
										# And my toast has gone to the moon.
										# But when I saw it on television,
										# Planting our flag on Halley's comet,
										# More still did I want to eat it."
poem['toast'] = 'honeydew'				# Replaces the word toast with honeydew, targeting data
poem.lines.to_a.reverse 				# Takes the string, seperates each line,
										# pumps each line into an array, reverses the array
poem.lines.to_a.reverse.join 			# Joins the lines together, poem.lines.to_a.reverse.to_s is a another option
poem.include? "string"					



# ===== Conversions =====
40.to_s									# Returns the item converted to a string
40.to_i									# Returns the item converted to an integer
40.to_a									# Returns the item converted to an array



# ===== Arrays =====
[]										# Returns an empty array
[12, 47, 35]							# Returns [12, 47, 35]
variable = [12, 47, 35]					# Sets the variable equal to [12, 47, 35]
[12, 47, 35].max 						# Returns the largest element, 47
variable.sort							# Returns the array sorted, [12, 35, 47]
variable.sort!							# Sets the variable to a sorted array and returns it, variable = [12, 35, 47] now



# ===== Hash =====
books = {}								# Creates an empty hash
books["Gravity's Rainbow"] = :splendid


