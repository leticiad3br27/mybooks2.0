import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    paddingTop: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#471111',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#b98f84cc',
    borderRadius: 13,
    marginBottom: 13,
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 120,
    resizeMode: 'contain',
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16.5,
    marginBottom: 4,
  },
  cardDesc: {
    color: '#fff',
    fontSize: 13.2,
  },
});
