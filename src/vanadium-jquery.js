/*
 =====================================================================
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above
 copyright notice, this list of conditions and the following
 disclaimer.

 2. Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 3. The name of the author may not be used to endorse or promote
 products derived from this software without specific prior
 written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS
 OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 @author Daniel Kwiecinski <daniel.kwiecinski@lambder.com>
 @copyright 2009 Daniel Kwiecinski.
 @end
 =====================================================================

 =====================================================================
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above
 copyright notice, this list of conditions and the following
 disclaimer.

 2. Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 3. The name of the author may not be used to endorse or promote
 products derived from this software without specific prior
 written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS
 OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 @author Arthur Brukish <abrukish@gmail.com>
 @copyright 2012  Arthur Brukish.
 @end
 =====================================================================
*/
Vanadium = {};
Vanadium.Version = '0.2';
Vanadium.CompatibleWithJQuery = '1.7.1';
Vanadium.Type = "jquery";
Vanadium.UseScrollTo = true;

if (jQuery().jquery.indexOf(Vanadium.CompatibleWithJQuery) != 0 && window.console && window.console.warn)
  console.warn("This version of Vanadium is tested with jQuery " + Vanadium.CompatibleWithJQuery +
               " it may not work as expected with this version (" + jQuery().jquery + ")");

if ( Vanadium.UseScrollTo && typeof( jQuery.scrollTo ) != 'function' && window.console && window.console.warn ) {
  Vanadium.UseScrollTo = false;
  console.warn("You don't have scrollTo plugin installed. If you want to use its features in Vanadium - install it from http://flesler.blogspot.com/2007/10/jqueryscrollto.html");
}
Vanadium.each = jQuery.each;

Vanadium.all_elements = function() {
  return jQuery('*');
};

Vanadium.partition = function(elements, dyscriminator) {
  var left = [];
  var right = [];
  Vanadium.each(elements, function() {
    if (dyscriminator(this)) {
      left.push(this);
    } else {
      right.push(this);
    }
    ;
  });
  return [left, right];
};

