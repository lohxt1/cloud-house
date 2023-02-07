const data = [
	{
		id: 1,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 2,
		sepalLengthCm: 4.9,
		sepalWidthCm: 3,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 3,
		sepalLengthCm: 4.7,
		sepalWidthCm: 3.2,
		petalLengthCm: 1.3,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 4,
		sepalLengthCm: 4.6,
		sepalWidthCm: 3.1,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 5,
		sepalLengthCm: 5,
		sepalWidthCm: 3.6,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 6,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3.9,
		petalLengthCm: 1.7,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 7,
		sepalLengthCm: 4.6,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.4,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 8,
		sepalLengthCm: 5,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 9,
		sepalLengthCm: 4.4,
		sepalWidthCm: 2.9,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 10,
		sepalLengthCm: 4.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 1.5,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 11,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3.7,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 12,
		sepalLengthCm: 4.8,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.6,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 13,
		sepalLengthCm: 4.8,
		sepalWidthCm: 3,
		petalLengthCm: 1.4,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 14,
		sepalLengthCm: 4.3,
		sepalWidthCm: 3,
		petalLengthCm: 1.1,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 15,
		sepalLengthCm: 5.8,
		sepalWidthCm: 4,
		petalLengthCm: 1.2,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 16,
		sepalLengthCm: 5.7,
		sepalWidthCm: 4.4,
		petalLengthCm: 1.5,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 17,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3.9,
		petalLengthCm: 1.3,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 18,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.4,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 19,
		sepalLengthCm: 5.7,
		sepalWidthCm: 3.8,
		petalLengthCm: 1.7,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 20,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.8,
		petalLengthCm: 1.5,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 21,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.7,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 22,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.7,
		petalLengthCm: 1.5,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 23,
		sepalLengthCm: 4.6,
		sepalWidthCm: 3.6,
		petalLengthCm: 1,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 24,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.3,
		petalLengthCm: 1.7,
		petalWidthCm: 0.5,
		species: 'Iris-setosa'
	},
	{
		id: 25,
		sepalLengthCm: 4.8,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.9,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 26,
		sepalLengthCm: 5,
		sepalWidthCm: 3,
		petalLengthCm: 1.6,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 27,
		sepalLengthCm: 5,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.6,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 28,
		sepalLengthCm: 5.2,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 29,
		sepalLengthCm: 5.2,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 30,
		sepalLengthCm: 4.7,
		sepalWidthCm: 3.2,
		petalLengthCm: 1.6,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 31,
		sepalLengthCm: 4.8,
		sepalWidthCm: 3.1,
		petalLengthCm: 1.6,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 32,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.5,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 33,
		sepalLengthCm: 5.2,
		sepalWidthCm: 4.1,
		petalLengthCm: 1.5,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 34,
		sepalLengthCm: 5.5,
		sepalWidthCm: 4.2,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 35,
		sepalLengthCm: 4.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 1.5,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 36,
		sepalLengthCm: 5,
		sepalWidthCm: 3.2,
		petalLengthCm: 1.2,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 37,
		sepalLengthCm: 5.5,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.3,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 38,
		sepalLengthCm: 4.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 1.5,
		petalWidthCm: 0.1,
		species: 'Iris-setosa'
	},
	{
		id: 39,
		sepalLengthCm: 4.4,
		sepalWidthCm: 3,
		petalLengthCm: 1.3,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 40,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.4,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 41,
		sepalLengthCm: 5,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.3,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 42,
		sepalLengthCm: 4.5,
		sepalWidthCm: 2.3,
		petalLengthCm: 1.3,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 43,
		sepalLengthCm: 4.4,
		sepalWidthCm: 3.2,
		petalLengthCm: 1.3,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 44,
		sepalLengthCm: 5,
		sepalWidthCm: 3.5,
		petalLengthCm: 1.6,
		petalWidthCm: 0.6,
		species: 'Iris-setosa'
	},
	{
		id: 45,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.8,
		petalLengthCm: 1.9,
		petalWidthCm: 0.4,
		species: 'Iris-setosa'
	},
	{
		id: 46,
		sepalLengthCm: 4.8,
		sepalWidthCm: 3,
		petalLengthCm: 1.4,
		petalWidthCm: 0.3,
		species: 'Iris-setosa'
	},
	{
		id: 47,
		sepalLengthCm: 5.1,
		sepalWidthCm: 3.8,
		petalLengthCm: 1.6,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 48,
		sepalLengthCm: 4.6,
		sepalWidthCm: 3.2,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 49,
		sepalLengthCm: 5.3,
		sepalWidthCm: 3.7,
		petalLengthCm: 1.5,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 50,
		sepalLengthCm: 5,
		sepalWidthCm: 3.3,
		petalLengthCm: 1.4,
		petalWidthCm: 0.2,
		species: 'Iris-setosa'
	},
	{
		id: 51,
		sepalLengthCm: 7,
		sepalWidthCm: 3.2,
		petalLengthCm: 4.7,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 52,
		sepalLengthCm: 6.4,
		sepalWidthCm: 3.2,
		petalLengthCm: 4.5,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 53,
		sepalLengthCm: 6.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 4.9,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 54,
		sepalLengthCm: 5.5,
		sepalWidthCm: 2.3,
		petalLengthCm: 4,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 55,
		sepalLengthCm: 6.5,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.6,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 56,
		sepalLengthCm: 5.7,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.5,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 57,
		sepalLengthCm: 6.3,
		sepalWidthCm: 3.3,
		petalLengthCm: 4.7,
		petalWidthCm: 1.6,
		species: 'Iris-versicolor'
	},
	{
		id: 58,
		sepalLengthCm: 4.9,
		sepalWidthCm: 2.4,
		petalLengthCm: 3.3,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 59,
		sepalLengthCm: 6.6,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.6,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 60,
		sepalLengthCm: 5.2,
		sepalWidthCm: 2.7,
		petalLengthCm: 3.9,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 61,
		sepalLengthCm: 5,
		sepalWidthCm: 2,
		petalLengthCm: 3.5,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 62,
		sepalLengthCm: 5.9,
		sepalWidthCm: 3,
		petalLengthCm: 4.2,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 63,
		sepalLengthCm: 6,
		sepalWidthCm: 2.2,
		petalLengthCm: 4,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 64,
		sepalLengthCm: 6.1,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.7,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 65,
		sepalLengthCm: 5.6,
		sepalWidthCm: 2.9,
		petalLengthCm: 3.6,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 66,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3.1,
		petalLengthCm: 4.4,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 67,
		sepalLengthCm: 5.6,
		sepalWidthCm: 3,
		petalLengthCm: 4.5,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 68,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.7,
		petalLengthCm: 4.1,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 69,
		sepalLengthCm: 6.2,
		sepalWidthCm: 2.2,
		petalLengthCm: 4.5,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 70,
		sepalLengthCm: 5.6,
		sepalWidthCm: 2.5,
		petalLengthCm: 3.9,
		petalWidthCm: 1.1,
		species: 'Iris-versicolor'
	},
	{
		id: 71,
		sepalLengthCm: 5.9,
		sepalWidthCm: 3.2,
		petalLengthCm: 4.8,
		petalWidthCm: 1.8,
		species: 'Iris-versicolor'
	},
	{
		id: 72,
		sepalLengthCm: 6.1,
		sepalWidthCm: 2.8,
		petalLengthCm: 4,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 73,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.5,
		petalLengthCm: 4.9,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 74,
		sepalLengthCm: 6.1,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.7,
		petalWidthCm: 1.2,
		species: 'Iris-versicolor'
	},
	{
		id: 75,
		sepalLengthCm: 6.4,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.3,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 76,
		sepalLengthCm: 6.6,
		sepalWidthCm: 3,
		petalLengthCm: 4.4,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 77,
		sepalLengthCm: 6.8,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.8,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 78,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3,
		petalLengthCm: 5,
		petalWidthCm: 1.7,
		species: 'Iris-versicolor'
	},
	{
		id: 79,
		sepalLengthCm: 6,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.5,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 80,
		sepalLengthCm: 5.7,
		sepalWidthCm: 2.6,
		petalLengthCm: 3.5,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 81,
		sepalLengthCm: 5.5,
		sepalWidthCm: 2.4,
		petalLengthCm: 3.8,
		petalWidthCm: 1.1,
		species: 'Iris-versicolor'
	},
	{
		id: 82,
		sepalLengthCm: 5.5,
		sepalWidthCm: 2.4,
		petalLengthCm: 3.7,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 83,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.7,
		petalLengthCm: 3.9,
		petalWidthCm: 1.2,
		species: 'Iris-versicolor'
	},
	{
		id: 84,
		sepalLengthCm: 6,
		sepalWidthCm: 2.7,
		petalLengthCm: 5.1,
		petalWidthCm: 1.6,
		species: 'Iris-versicolor'
	},
	{
		id: 85,
		sepalLengthCm: 5.4,
		sepalWidthCm: 3,
		petalLengthCm: 4.5,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 86,
		sepalLengthCm: 6,
		sepalWidthCm: 3.4,
		petalLengthCm: 4.5,
		petalWidthCm: 1.6,
		species: 'Iris-versicolor'
	},
	{
		id: 87,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3.1,
		petalLengthCm: 4.7,
		petalWidthCm: 1.5,
		species: 'Iris-versicolor'
	},
	{
		id: 88,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.3,
		petalLengthCm: 4.4,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 89,
		sepalLengthCm: 5.6,
		sepalWidthCm: 3,
		petalLengthCm: 4.1,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 90,
		sepalLengthCm: 5.5,
		sepalWidthCm: 2.5,
		petalLengthCm: 4,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 91,
		sepalLengthCm: 5.5,
		sepalWidthCm: 2.6,
		petalLengthCm: 4.4,
		petalWidthCm: 1.2,
		species: 'Iris-versicolor'
	},
	{
		id: 92,
		sepalLengthCm: 6.1,
		sepalWidthCm: 3,
		petalLengthCm: 4.6,
		petalWidthCm: 1.4,
		species: 'Iris-versicolor'
	},
	{
		id: 93,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.6,
		petalLengthCm: 4,
		petalWidthCm: 1.2,
		species: 'Iris-versicolor'
	},
	{
		id: 94,
		sepalLengthCm: 5,
		sepalWidthCm: 2.3,
		petalLengthCm: 3.3,
		petalWidthCm: 1,
		species: 'Iris-versicolor'
	},
	{
		id: 95,
		sepalLengthCm: 5.6,
		sepalWidthCm: 2.7,
		petalLengthCm: 4.2,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 96,
		sepalLengthCm: 5.7,
		sepalWidthCm: 3,
		petalLengthCm: 4.2,
		petalWidthCm: 1.2,
		species: 'Iris-versicolor'
	},
	{
		id: 97,
		sepalLengthCm: 5.7,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.2,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 98,
		sepalLengthCm: 6.2,
		sepalWidthCm: 2.9,
		petalLengthCm: 4.3,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 99,
		sepalLengthCm: 5.1,
		sepalWidthCm: 2.5,
		petalLengthCm: 3,
		petalWidthCm: 1.1,
		species: 'Iris-versicolor'
	},
	{
		id: 100,
		sepalLengthCm: 5.7,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.1,
		petalWidthCm: 1.3,
		species: 'Iris-versicolor'
	},
	{
		id: 101,
		sepalLengthCm: 6.3,
		sepalWidthCm: 3.3,
		petalLengthCm: 6,
		petalWidthCm: 2.5,
		species: 'Iris-virginica'
	},
	{
		id: 102,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.7,
		petalLengthCm: 5.1,
		petalWidthCm: 1.9,
		species: 'Iris-virginica'
	},
	{
		id: 103,
		sepalLengthCm: 7.1,
		sepalWidthCm: 3,
		petalLengthCm: 5.9,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 104,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.9,
		petalLengthCm: 5.6,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 105,
		sepalLengthCm: 6.5,
		sepalWidthCm: 3,
		petalLengthCm: 5.8,
		petalWidthCm: 2.2,
		species: 'Iris-virginica'
	},
	{
		id: 106,
		sepalLengthCm: 7.6,
		sepalWidthCm: 3,
		petalLengthCm: 6.6,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 107,
		sepalLengthCm: 4.9,
		sepalWidthCm: 2.5,
		petalLengthCm: 4.5,
		petalWidthCm: 1.7,
		species: 'Iris-virginica'
	},
	{
		id: 108,
		sepalLengthCm: 7.3,
		sepalWidthCm: 2.9,
		petalLengthCm: 6.3,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 109,
		sepalLengthCm: 6.7,
		sepalWidthCm: 2.5,
		petalLengthCm: 5.8,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 110,
		sepalLengthCm: 7.2,
		sepalWidthCm: 3.6,
		petalLengthCm: 6.1,
		petalWidthCm: 2.5,
		species: 'Iris-virginica'
	},
	{
		id: 111,
		sepalLengthCm: 6.5,
		sepalWidthCm: 3.2,
		petalLengthCm: 5.1,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 112,
		sepalLengthCm: 6.4,
		sepalWidthCm: 2.7,
		petalLengthCm: 5.3,
		petalWidthCm: 1.9,
		species: 'Iris-virginica'
	},
	{
		id: 113,
		sepalLengthCm: 6.8,
		sepalWidthCm: 3,
		petalLengthCm: 5.5,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 114,
		sepalLengthCm: 5.7,
		sepalWidthCm: 2.5,
		petalLengthCm: 5,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 115,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.8,
		petalLengthCm: 5.1,
		petalWidthCm: 2.4,
		species: 'Iris-virginica'
	},
	{
		id: 116,
		sepalLengthCm: 6.4,
		sepalWidthCm: 3.2,
		petalLengthCm: 5.3,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 117,
		sepalLengthCm: 6.5,
		sepalWidthCm: 3,
		petalLengthCm: 5.5,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 118,
		sepalLengthCm: 7.7,
		sepalWidthCm: 3.8,
		petalLengthCm: 6.7,
		petalWidthCm: 2.2,
		species: 'Iris-virginica'
	},
	{
		id: 119,
		sepalLengthCm: 7.7,
		sepalWidthCm: 2.6,
		petalLengthCm: 6.9,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 120,
		sepalLengthCm: 6,
		sepalWidthCm: 2.2,
		petalLengthCm: 5,
		petalWidthCm: 1.5,
		species: 'Iris-virginica'
	},
	{
		id: 121,
		sepalLengthCm: 6.9,
		sepalWidthCm: 3.2,
		petalLengthCm: 5.7,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 122,
		sepalLengthCm: 5.6,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.9,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 123,
		sepalLengthCm: 7.7,
		sepalWidthCm: 2.8,
		petalLengthCm: 6.7,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 124,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.7,
		petalLengthCm: 4.9,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 125,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3.3,
		petalLengthCm: 5.7,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 126,
		sepalLengthCm: 7.2,
		sepalWidthCm: 3.2,
		petalLengthCm: 6,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 127,
		sepalLengthCm: 6.2,
		sepalWidthCm: 2.8,
		petalLengthCm: 4.8,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 128,
		sepalLengthCm: 6.1,
		sepalWidthCm: 3,
		petalLengthCm: 4.9,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 129,
		sepalLengthCm: 6.4,
		sepalWidthCm: 2.8,
		petalLengthCm: 5.6,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 130,
		sepalLengthCm: 7.2,
		sepalWidthCm: 3,
		petalLengthCm: 5.8,
		petalWidthCm: 1.6,
		species: 'Iris-virginica'
	},
	{
		id: 131,
		sepalLengthCm: 7.4,
		sepalWidthCm: 2.8,
		petalLengthCm: 6.1,
		petalWidthCm: 1.9,
		species: 'Iris-virginica'
	},
	{
		id: 132,
		sepalLengthCm: 7.9,
		sepalWidthCm: 3.8,
		petalLengthCm: 6.4,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 133,
		sepalLengthCm: 6.4,
		sepalWidthCm: 2.8,
		petalLengthCm: 5.6,
		petalWidthCm: 2.2,
		species: 'Iris-virginica'
	},
	{
		id: 134,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.8,
		petalLengthCm: 5.1,
		petalWidthCm: 1.5,
		species: 'Iris-virginica'
	},
	{
		id: 135,
		sepalLengthCm: 6.1,
		sepalWidthCm: 2.6,
		petalLengthCm: 5.6,
		petalWidthCm: 1.4,
		species: 'Iris-virginica'
	},
	{
		id: 136,
		sepalLengthCm: 7.7,
		sepalWidthCm: 3,
		petalLengthCm: 6.1,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 137,
		sepalLengthCm: 6.3,
		sepalWidthCm: 3.4,
		petalLengthCm: 5.6,
		petalWidthCm: 2.4,
		species: 'Iris-virginica'
	},
	{
		id: 138,
		sepalLengthCm: 6.4,
		sepalWidthCm: 3.1,
		petalLengthCm: 5.5,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 139,
		sepalLengthCm: 6,
		sepalWidthCm: 3,
		petalLengthCm: 4.8,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	},
	{
		id: 140,
		sepalLengthCm: 6.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 5.4,
		petalWidthCm: 2.1,
		species: 'Iris-virginica'
	},
	{
		id: 141,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3.1,
		petalLengthCm: 5.6,
		petalWidthCm: 2.4,
		species: 'Iris-virginica'
	},
	{
		id: 142,
		sepalLengthCm: 6.9,
		sepalWidthCm: 3.1,
		petalLengthCm: 5.1,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 143,
		sepalLengthCm: 5.8,
		sepalWidthCm: 2.7,
		petalLengthCm: 5.1,
		petalWidthCm: 1.9,
		species: 'Iris-virginica'
	},
	{
		id: 144,
		sepalLengthCm: 6.8,
		sepalWidthCm: 3.2,
		petalLengthCm: 5.9,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 145,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3.3,
		petalLengthCm: 5.7,
		petalWidthCm: 2.5,
		species: 'Iris-virginica'
	},
	{
		id: 146,
		sepalLengthCm: 6.7,
		sepalWidthCm: 3,
		petalLengthCm: 5.2,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 147,
		sepalLengthCm: 6.3,
		sepalWidthCm: 2.5,
		petalLengthCm: 5,
		petalWidthCm: 1.9,
		species: 'Iris-virginica'
	},
	{
		id: 148,
		sepalLengthCm: 6.5,
		sepalWidthCm: 3,
		petalLengthCm: 5.2,
		petalWidthCm: 2,
		species: 'Iris-virginica'
	},
	{
		id: 149,
		sepalLengthCm: 6.2,
		sepalWidthCm: 3.4,
		petalLengthCm: 5.4,
		petalWidthCm: 2.3,
		species: 'Iris-virginica'
	},
	{
		id: 150,
		sepalLengthCm: 5.9,
		sepalWidthCm: 3,
		petalLengthCm: 5.1,
		petalWidthCm: 1.8,
		species: 'Iris-virginica'
	}
];

const config = {
	sepalLengthCm: {
		max: Math.max(...data.map((_) => _.sepalLengthCm)),
		min: Math.min(...data.map((_) => _.sepalLengthCm))
	},
	sepalWidthCm: {
		max: Math.max(...data.map((_) => _.sepalWidthCm)),
		min: Math.min(...data.map((_) => _.sepalWidthCm))
	},
	petalLengthCm: {
		max: Math.max(...data.map((_) => _.petalLengthCm)),
		min: Math.min(...data.map((_) => _.petalLengthCm))
	},
	petalWidthCm: {
		max: Math.max(...data.map((_) => _.petalWidthCm)),
		min: Math.min(...data.map((_) => _.petalWidthCm))
	}
};

export { data, config };
