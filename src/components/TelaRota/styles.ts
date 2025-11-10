import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  header: {
    fontSize: 17.5,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 18,
    textAlign: 'left',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 16,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.055,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    color: '#953b33',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 7,
    marginBottom: 2,
    textAlign: 'center'
  },
  value: {
    color: '#333',
    fontSize: 15,
    textAlign: 'center'
  },
});
