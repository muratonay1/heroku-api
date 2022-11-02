
import PocketList from './PocketList';
import Pocket from './Pocket';
/**
 * @returns {Pocket}
 * @description
 * JSON objesini Pocket objesine parse eden prototype metodu.
 */
Object.prototype.toPocket =
	Object.prototype.toPocket ||
	/**@returns {Pocket}*/ function () {
		var snapshot = this;
		var pocket = new Pocket();
		var pocketList = new PocketList();
		var memory = new String();
		function traverse(obj, callback, trail) {
			trail = trail || [];
			Object.keys(obj).forEach(function (key) {
				var value = obj[key];
				if (Object.getPrototypeOf(value) === Object.prototype) {
					traverse(value, callback, trail.concat(key));
				} else {
					callback.call(obj, key, value, trail);
				}
			});
		}

		traverse(snapshot, function (key, value, trail) {
			if (trail == "") {
				pocket.put(key, value);
			} else {
				if (trail.length == 1) {
					memory = memory + trail[0] + "." + key;
				} else if (trail.length >= 2) {
					for (let i = 0; i < trail.length; i++) {
						if (i == 0) {
							memory = trail[0];
						} else {
							memory = memory + "." + trail[i];
						}
					}
				}
				pocket.put(memory, value);
				memory = "";
			}
		});
		return pocket;
	};
