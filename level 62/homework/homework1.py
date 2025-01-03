# In Python, `_` (single underscore) marks an attribute or method as **internal** 
# (for internal use only, but still accessible outside the class), while `__` (double underscore) triggers **name mangling**,
# making the attribute harder to access by renaming it
# internally to prevent accidental access or conflicts in subclasses. Use `_` for internal use and `__` for stronger encapsulation.