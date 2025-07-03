import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';
import { router } from 'expo-router';
import { ChevronRight, Package, Ticket, Shirt, Heart, Bell, CircleHelp as HelpCircle, Settings, CreditCard, MapPin, Database, Star } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ProfileTab() {
  const handleHelpPress = () => {
    router.push('/help');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Status Bar Area */}
        <View style={styles.statusBarArea}>
          <View style={styles.statusBarContent}>
            <Text style={styles.timeText}>9:41</Text>
            <View style={styles.statusIcons}>
              <View style={styles.signalBars}>
                <View style={[styles.bar, styles.bar1]} />
                <View style={[styles.bar, styles.bar2]} />
                <View style={[styles.bar, styles.bar3]} />
                <View style={[styles.bar, styles.bar4]} />
              </View>
              <View style={styles.wifiIcon}>
                <Text style={styles.wifiText}>📶</Text>
              </View>
              <View style={styles.batteryContainer}>
                <View style={styles.battery}>
                  <View style={styles.batteryFill} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImageBorder}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' }}
                style={styles.profileImage}
              />
            </View>
          </View>
          
          <Text style={styles.profileName}>Laura</Text>
          <Text style={styles.memberSince}>Miga desde 05/10/000</Text>
          
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsNumber}>5.234 pontos</Text>
            <Text style={styles.pointsStatus}>Platinum</Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>4 mil</Text>
              <Text style={styles.progressLabel}>7 mil</Text>
            </View>
          </View>
          
          <View style={styles.expirationWarning}>
            <Text style={styles.expirationText}>⚠️ 1.300 pontos vencem dia 24/10</Text>
          </View>
        </View>

        {/* Premium Card */}
        <View style={styles.premiumCard}>
          <View style={styles.premiumCardContent}>
            <Text style={styles.premiumTitle}>Assinatura Premium</Text>
            <Text style={styles.premiumSubtitle}>Ganhe vantagens{'\n'}exclusivas</Text>
            <TouchableOpacity style={styles.premiumButton}>
              <Text style={styles.premiumButtonText}>Conheça os benefícios</Text>
              <ChevronRight size={14} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Clube das Migas */}
        <TouchableOpacity style={styles.clubeSection}>
          <View style={styles.clubeContent}>
            <Star size={18} color="#E91E63" />
            <Text style={styles.clubeText}>Clube das migas</Text>
          </View>
          <ChevronRight size={18} color="#CCCCCC" />
        </TouchableOpacity>

        {/* Menu Grid */}
        <View style={styles.menuGrid}>
          <View style={styles.menuRow}>
            <TouchableOpacity style={styles.menuItem}>
              <Package size={20} color="#666666" />
              <Text style={styles.menuItemText}>Pedidos</Text>
              <ChevronRight size={14} color="#CCCCCC" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Ticket size={20} color="#666666" />
              <Text style={styles.menuItemText}>Cupons</Text>
              <ChevronRight size={14} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.menuRow}>
            <TouchableOpacity style={styles.menuItem}>
              <Shirt size={20} color="#666666" />
              <Text style={styles.menuItemText}>Meu guarda-{'\n'}roupa TR</Text>
              <ChevronRight size={14} color="#CCCCCC" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Heart size={20} color="#666666" />
              <Text style={styles.menuItemText}>Favoritos</Text>
              <ChevronRight size={14} color="#CCCCCC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.notificationsHeader}>
          <View style={styles.notificationsTitleContainer}>
            <Bell size={16} color="#666666" />
            <Text style={styles.notificationsTitle}>Últimas notificações</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notificationsList}>
          <View style={styles.notificationItem}>
            <View style={styles.notificationIcon}>
              <View style={[styles.notificationDot, { backgroundColor: '#E91E63' }]} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>🌸 Novidades no ar!</Text>
              <Text style={styles.notificationText}>Nossa nova coleção já está disponível! Confira as peças exclusivas que acabaram de chegar</Text>
            </View>
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationIcon}>
              <View style={[styles.notificationDot, { backgroundColor: '#FF6B35' }]} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>🛍️ Benefício Exclusivo para Migas do clube!</Text>
              <Text style={styles.notificationText}>Como parte do nosso Clube de Fidelidade, você acumula pontos a cada compra e pode ganhar descontos especiais</Text>
            </View>
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationIcon}>
              <View style={[styles.notificationDot, { backgroundColor: '#4A90E2' }]} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>💧 Sua Opinião Importa!</Text>
              <Text style={styles.notificationText}>Conte-nos quais estilos você gostaria de ver nas próximas coleções e ganhe pontos extras no nosso Clube de Fidelidade</Text>
            </View>
          </View>
        </View>

        {/* Account Management */}
        <View style={styles.accountSection}>
          <Text style={styles.accountTitle}>Gestão de conta</Text>
          
          <TouchableOpacity style={styles.accountItem} onPress={handleHelpPress}>
            <HelpCircle size={18} color="#666666" />
            <Text style={styles.accountItemText}>Ajuda</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.accountItem}>
            <Settings size={18} color="#666666" />
            <Text style={styles.accountItemText}>Ajustes de conta</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.accountItem}>
            <CreditCard size={18} color="#666666" />
            <Text style={styles.accountItemText}>Métodos de pagamento</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.accountItem}>
            <MapPin size={18} color="#666666" />
            <Text style={styles.accountItemText}>Endereços de entrega</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.accountItem}>
            <Bell size={18} color="#666666" />
            <Text style={styles.accountItemText}>Preferências de notificações</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.accountItem, { borderBottomWidth: 0 }]}>
            <Database size={18} color="#666666" />
            <Text style={styles.accountItemText}>Dados coletados</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  statusBarArea: {
    height: 44,
    backgroundColor: '#F5F5F5',
    paddingTop: 8,
  },
  statusBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  bar1: {
    width: 3,
    height: 4,
  },
  bar2: {
    width: 3,
    height: 6,
  },
  bar3: {
    width: 3,
    height: 8,
  },
  bar4: {
    width: 3,
    height: 10,
  },
  wifiIcon: {
    marginLeft: 2,
  },
  wifiText: {
    fontSize: 15,
  },
  batteryContainer: {
    marginLeft: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  batteryFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 25,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 25,
    backgroundColor: '#F5F5F5',
  },
  profileImageContainer: {
    marginBottom: 12,
  },
  profileImageBorder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2.5,
    borderColor: '#E91E63',
    padding: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 42,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 18,
  },
  pointsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pointsNumber: {
    fontSize: 28,
    fontWeight: '300',
    color: '#E91E63',
    marginBottom: 2,
  },
  pointsStatus: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
  },
  progressBar: {
    width: '75%',
    height: 6,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    width: '62%',
    height: '100%',
    backgroundColor: '#E91E63',
    borderRadius: 3,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: 6,
  },
  progressLabel: {
    fontSize: 11,
    color: '#888888',
  },
  expirationWarning: {
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFE082',
  },
  expirationText: {
    fontSize: 12,
    color: '#F57F17',
    textAlign: 'center',
  },
  premiumCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#8D6E63',
  },
  premiumCardContent: {
    padding: 20,
  },
  premiumTitle: {
    fontSize: 13,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 2,
  },
  premiumSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    lineHeight: 24,
  },
  premiumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 6,
  },
  premiumButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  clubeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 10,
  },
  clubeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clubeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 10,
  },
  menuGrid: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  menuRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  menuItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 10,
  },
  menuItemText: {
    fontSize: 13,
    color: '#000000',
    marginLeft: 12,
    flex: 1,
    lineHeight: 16,
  },
  notificationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  notificationsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationsTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 6,
  },
  seeAllText: {
    fontSize: 13,
    color: '#E91E63',
    fontWeight: '500',
  },
  notificationsList: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  notificationItem: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  notificationIcon: {
    marginRight: 14,
    marginTop: 2,
  },
  notificationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  notificationText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  accountSection: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  accountTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 12,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  accountItemText: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 14,
    flex: 1,
  },
  bottomPadding: {
    height: 100,
  },
});