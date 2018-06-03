export function chain<T>(obj: T): T {
	if (obj) {
		return obj as T;
	} else {
		return {} as T;
	}
}

export function resolve<T>(obj: T): T | null {
	if (isObject(obj) && Object.keys(obj).length === 0) {
		return null;
	} else {
		return obj as T;
	}
}

function isObject(value: any) {
	const type = typeof value;
	return value != null && (type == 'object' || type == 'function');
}