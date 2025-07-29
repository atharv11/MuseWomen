from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
from surprise import accuracy

# Sample user-product interaction data
data_dict = {
    'item': ['product1', 'product2', 'product3', 'product4', 'product5', 'product2', 'product3'],
    'user': ['user1', 'user1', 'user2', 'user2', 'user3', 'user3', 'user1'],
    'rating': [4, 5, 3, 4, 2, 5, 4]  # Simulate implicit feedback (clicks → 1–5 scale)
}

import pandas as pd
df = pd.DataFrame(data_dict)

# Define how to read the data for surprise
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['user', 'item', 'rating']], reader)

# Train/test split
trainset, testset = train_test_split(data, test_size=0.2)

# Use SVD algorithm (Matrix Factorization)
algo = SVD()
algo.fit(trainset)

# Evaluate (optional)
predictions = algo.test(testset)
print("RMSE:", accuracy.rmse(predictions))

# Recommend top 3 products for a given user (e.g., 'user3')
all_items = df['item'].unique()
user_rated_items = df[df['user'] == 'user3']['item'].values
items_to_predict = [item for item in all_items if item not in user_rated_items]

recommendations = []
for item in items_to_predict:
    pred = algo.predict('user3', item)
    recommendations.append((item, pred.est))

# Sort by predicted rating
top_n = sorted(recommendations, key=lambda x: x[1], reverse=True)[:3]
print("Top 3 recommendations for user3:")
for item, rating in top_n:
    print(f"{item}: predicted rating {rating:.2f}")
