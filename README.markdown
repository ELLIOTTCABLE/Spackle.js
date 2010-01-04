Spackle.js
==========
Let’s smooth over some of those nicks ’n’ cracks, shall we?

### What?
Speckle. It fills in little holes and things.

### Yes, I know, I meant this project
Oh. My bad.

### Well?
Well, it’s Speckle… dot JS.

### Ooookay…
Speckle? For JavaScript?

… it fills in the little holes… in JavaScript… to provide a smooth surface on
which to develop.

Geeze, is this really that hard?

Using
-----
Each Spackle function is attached to a global object, but they are not
actually *applied* to those objects unless you tell Spackle to do so. This is
to make it possible to avoid polluting the global namespace.

If you *want* to do such, you need to call `spackle()` after calling it, as
such:

    from.package('Spackle').wait()
      .spackle();

When you call `spackle()`, the functions defined on `spackle.Number` will be
copied to `Number`, those on `spackle.String` will be copied to `String`, and
so on and so forth.
